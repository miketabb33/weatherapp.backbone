import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'

const Details = Backbone.View.extend({
  el: Config.appNodeId,
  template: _.template($('#detailsTemplate').html()),
  initialize: function () {
    this.render()
  },
  render: function () {
    this.$el.html(this.template())
  },
})

export default Details
