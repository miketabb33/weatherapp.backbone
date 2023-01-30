import Backbone from 'backbone'
import _ from 'underscore'
import $ from 'jquery'

const InputZip = Backbone.View.extend({
  template: _.template($('#inputZipTemplate').html()),
  initialize: function (onSubmit: (value: string) => void) {
    this.onSubmit = onSubmit
    this.button = this.$('#inputZipButton')
    this.render()
  },
  render: function () {
    this.$el.html(this.template())
    return this
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
})

export default InputZip
