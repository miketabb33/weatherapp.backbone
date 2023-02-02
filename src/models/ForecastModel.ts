import Backbone from 'backbone'
import { Config } from '../config'

const ForecastModel = Backbone.Model.extend({
  initialize: function (zip: string) {
    this.zip = zip
  },
  url: function () {
    return Config.apiUrl(this.zip)
  },
  parse: function (data: any) {
    console.log('ERROR BRO')
    return { ...data, success: data.cod === '200' }
  },
})

export default ForecastModel
