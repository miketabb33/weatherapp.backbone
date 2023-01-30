import Backbone from 'backbone'
import { Config } from '../config'

const PageNotFound = Backbone.View.extend({
  el: Config.appNodeId,
  initialize: function () {
    this.render()
  },
  render: function () {
    console.log('Page Not Found')
  },
})

export default PageNotFound
