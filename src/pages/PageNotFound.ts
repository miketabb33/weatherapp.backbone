import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'

const PageNotFound = Backbone.View.extend({
  el: Config.appNodeId,
  template: _.template($('#pageNotFound').html()),
  initialize: function () {
    this.render()
  },
  render: function () {
    this.$el.html(this.template())
    console.log('Page Not Found')
  },
})

export default PageNotFound
