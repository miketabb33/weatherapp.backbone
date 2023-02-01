import Backbone from 'backbone'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import Details from './pages/Details'

type CurrentPage = {
  id: string
  instance: any
}

let currentPage: CurrentPage = {
  id: 'none',
  instance: 'none',
}

const setCurrentPage = (newPage: CurrentPage) => {
  console.log('Page Loaded: ', newPage)
  currentPage = {
    id: newPage.id,
    instance: newPage.instance,
  }
}

const Router = Backbone.Router.extend({
  currentPage: function () {
    return currentPage
  },
  initialize: function (routes: any) {
    this.routes = routes
    Backbone.history.start()
  },
  routes: {
    params: 'params',
    'details/:zip': 'details',
    '': 'home',
    '*notFound': 'notFound',
  },

  details: function (zip: string) {
    setCurrentPage({ id: 'details', instance: new Details() })
  },

  home: function () {
    setCurrentPage({ id: 'home', instance: new Home() })
  },

  notFound: function () {
    setCurrentPage({ id: 'pageNotFound', instance: new PageNotFound() })
  },
})

export default Router
