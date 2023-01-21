import Backbone from 'backbone'

const IndexPage = Backbone.View.extend({
  el: '#app',
  initialize: function () {
    this.render()
  },
  render: function () {
    console.log('hi')
    console.log('cool')
  },
})

const page = new IndexPage()
