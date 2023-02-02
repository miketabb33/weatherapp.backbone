import Backbone from 'backbone'
import { Config } from '../config'

const ForecastModel = Backbone.Model.extend({
  initialize: function (zip: string) {
    this.set('zip', zip)
  },
  url: function () {
    return Config.apiUrl(this.get('zip'))
  },
  default: null,
})

export default ForecastModel
