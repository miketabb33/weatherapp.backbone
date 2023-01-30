import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'

const Home = Backbone.View.extend({
  el: Config.appNodeId,
  template: _.template($('#home').html()),
  initialize: function () {
    this.render()
  },
  render: function () {
    this.$el.html(this.template())
    console.log('Home Rendered')
  },
})

export default Home
