import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'
import ForecastModel from '../models/ForecastModel'

const Details = Backbone.View.extend({
  el: Config.appNodeId,
  baseTemplate: _.template($('#detailsTemplate').html()),

  initialize: function (zip: string) {
    this.zip = zip
    this.zipUrl = Config.apiUrl(zip)

    this.forecastModel = new ForecastModel(zip)
    this.listenTo(this.forecastModel, 'sync change', this.renderForecast)
    this.listenTo(this.forecastModel, 'error', this.renderError)

    this.forecastModel.fetch()
    this.render()
  },

  render: function () {
    console.log('state:', this.forecastModel.toJSON())

    if (!this.initialRenderCompleted) {
      this.$el.html(this.baseTemplate({ zip: this.zip, zipUrl: this.zipUrl }))
    }

    if (this.forecastModel.get('success')) {
    } else {
    }
  },

  renderForecast: function () {
    console.log('forecast!!!!!')
  },

  renderError: function () {
    console.log('ERROR!!!!!!')
  },
})

export default Details
