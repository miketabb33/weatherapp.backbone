import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { Config } from '../config'
import InputZip from '../components/InputZip'
import { router } from '..'

const Home = Backbone.View.extend({
  el: Config.appNodeId,
  template: _.template($('#homeTemplate').html()),
  initialize: function () {
    this.render()
  },
  render: function () {
    this.$el.html(this.template())
    const inputZip = new InputZip(this.didSubmitZip)
    $('#input').html(inputZip.render().el)
  },
  didSubmitZip: function (zip: string) {
    router.navigate(`#details/${zip}`, true)
  },
})

export default Home
