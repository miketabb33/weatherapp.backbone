import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'

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
    this.onSubmit(this.inputVal)
  },
  onChangeValue: function (e: any) {
    const val = $(e.currentTarget).val()
    this.inputVal = val
  },
  render: function () {
    this.$el.html(this.template())
    return this
  },
})

export default InputZip
