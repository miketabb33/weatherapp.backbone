import Backbone from 'backbone'

const Forecast = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  },
})

export default Forecast
