import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'
import Forecast from '../components/Forecast'
import ForecastModel from '../models/ForecastModel'

const Details = Backbone.View.extend({
  el: Config.appNodeId,
  template: _.template($('#details_container').html()),

  initialize: function (zip: string) {
    this.zip = zip

    this.render()
  },

  render: function () {
    this.$el.html(this.template())
    const forecast = new Forecast({ model: new ForecastModel(this.zip) })
    $('#details_status').html(forecast.el)
  },
})

export default Details
