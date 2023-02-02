import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'
import ForecastModel from '../models/ForecastModel'



const Details = Backbone.View.extend({
  el: Config.appNodeId,
  containerTemplate: _.template($('#details_container').html()),
  successTemplate: _.template($('#details_success').html()),
  errorTemplate: _.template($('#details_error').html()),
  loadingTemplate: _.template($('#details_loading').html()),

  initialize: function (zip: string) {
    this.zip = zip
    this.zipUrl = Config.apiUrl(zip)

    this.forecastModel = new ForecastModel(zip)
    this.listenTo(this.forecastModel, 'request', this.render)
    this.listenTo(this.forecastModel, 'sync change', this.render)

    this.forecastModel.fetch()
    this.render()
  },
  render: function () {
    if (!this.forecastModel.hasChanged()) {
      this.$el.html(this.loadingTemplate());
      return 
    }

    let content = this.renderForecast()
    if (!this.forecastModel.isValid())
      content = this.renderError()

    this.$el.html(this.containerTemplate({ view: content })) 
  },
  renderForecast: function () {
    return this.successTemplate({ zip: this.zip, zipUrl: this.zipUrl })
  },
  renderError: function () {
    return this.errorTemplate();
  },
})

export default Details
