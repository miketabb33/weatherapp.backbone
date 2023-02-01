import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'
import { validateZip } from '../logic/validateZip'

const InputZip = Backbone.View.extend({
  tagName: 'div',
  className: 'inputZip__container',
  template: _.template($('#inputZipTemplate').html()),
  initialize: function (onSubmit: (value: string) => void) {
    this.onSubmit = onSubmit
    this.button = this.$('#inputZipButton')
    this.render()
  },
  events: {
    'click #inputZipButton': 'onButtonClick',
    'change #inputZipInput': 'onChangeValue',
  },
  onButtonClick: function () {
    try {
      const inputVal = this.inputVal
      validateZip(inputVal)
      this.onSubmit(inputVal)
    } catch (error) {
      this.render(error)
    }
  },
  onChangeValue: function (e: any) {
    const val = $(e.currentTarget).val()
    this.inputVal = val
  },
  render: function (error: string = '') {
    this.$el.html(this.template({ error }))
    return this
  },
})

export default InputZip
