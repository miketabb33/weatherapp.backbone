import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'

const FailedForecast = Backbone.View.extend({
  tagName: 'div',
  className: 'failedForecast__container',
  template: _.template($('#inputZipTemplate').html()),

  initialize: function () {
    this.render()
  },

  render: function (error: string = '') {
    this.$el.html(this.template({ error }))
    return this
  },
})

export default FailedForecast
