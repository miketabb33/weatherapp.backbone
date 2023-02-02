import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { assembleForecast } from '../logic/assembleForecast'

const Forecast = Backbone.View.extend({
  tagName: 'div',
  className: 'forecast__container',
  successTemplate: _.template($('#forecast_success').html()),
  errorTemplate: _.template($('#forecast_error').html()),
  loadingTemplate: _.template($('#forecast_loading').html()),

  initialize: function () {
    this.listenTo(this.model, 'error', this.renderError)
    this.listenTo(this.model, 'change', this.renderForecast)

    this.renderLoading()
    this.model.fetch()
  },

  renderForecast: function () {
    const forecast = assembleForecast(this.model.toJSON())
    console.log(forecast)
    this.$el.html(
      this.successTemplate({
        cityName: forecast.city.name,
        temperature: forecast.list[0].main.temp,
        status: forecast.list[0].weather[0].description,
        zip: this.model.get('zip') || 'No Zip',
        zipUrl: this.model.url(),
      })
    )
  },

  renderError: function () {
    this.$el.html(this.errorTemplate())
  },

  renderLoading: function () {
    this.$el.html(this.loadingTemplate())
  },
})

export default Forecast
