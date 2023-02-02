import Backbone from 'backbone'
import { Config } from '../config'
import { assembleForecast } from '../logic/assembleForecast'
import { Forecast } from './Forecast'

const ForecastCollection = Backbone.Collection.extend({
  initialize: function (zip: string) {
    this.zip = zip
  },
  url: function () {
    return Config.apiUrl(this.zip)
  },
  fetchForecast: function (): Promise<Forecast> {
    return new Promise((resolve, reject) => {
      this.fetch()
        .then((res: any) => {
          const forecast = assembleForecast(res)
          resolve(forecast)
        })
        .catch(reject)
    })
  },
})

export default ForecastCollection
