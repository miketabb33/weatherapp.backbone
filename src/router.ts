import Backbone from 'backbone'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'

type CurrentPage = {
  instance: any
  id: string
}

let currentPage: CurrentPage

export const getCurrentPage = () => {
  return currentPage
}

const Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start()
  },
  routes: {
    params: 'params',
    '': 'home',
    '*notFound': 'notFound',
  },
  params: function (params: string) {
    console.log('app.router.params = ' + params) // just for didactical purposes.
  },

  home: function () {
    currentPage = {
      instance: new Home(),
      id: 'home',
    }
  },

  notFound: function () {
    currentPage = {
      instance: new PageNotFound(),
      id: 'pageNotFound',
    }
  },
})

export default Router
