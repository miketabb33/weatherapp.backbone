import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'
import ForecastCollection from '../models/ForecastCollection'
import { Forecast } from '../models/Forecast'

const Details = Backbone.View.extend({
  el: Config.appNodeId,
  template: _.template($('#detailsTemplate').html()),
  initialize: function (zip: string) {
    this.zip = zip
    this.zipUrl = Config.apiUrl(zip)

    this.render()
    this.forecastCollection = new ForecastCollection(zip)
    this.forecastCollection.fetchForecast().then((forecast: Forecast) => {
      console.log(forecast)
    })
  },
  render: function () {
    this.$el.html(this.template({ zip: this.zip, zipUrl: this.zipUrl }))
  },
})

export default Details
