import Backbone from 'backbone'
import { Config } from '../config'

const ForecastModel = Backbone.Model.extend({
  initialize: function (zip: string) {
    this.zip = zip
  },
  url: function () {
    return Config.apiUrl(this.zip)
  },
  default: null
})

export default ForecastModel
