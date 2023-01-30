import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'
import InputZip from '../components/InputZip'

const Home = Backbone.View.extend({
  el: Config.appNodeId,
  template: _.template($('#homeTemplate').html()),
  initialize: function () {
    this.render()
  },
  render: function () {
    this.$el.html(this.template())
    const inputZip = new InputZip(this.didSubmit)
    $('#input').html(inputZip.render().el)
  },
  didSubmit: function (value: string) {
    console.log(value)
  },
})

export default Home
