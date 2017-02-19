const render = require('inferno').render
const createElement = require('inferno-create-element')
const component = require('./component')

const props = {
  message: 'Inferno!',
  editMessage: function (msg) {
    props.message = msg
    update()
  }
}

let appNode

function update () {
  render(createElement(component, props), appNode)
}

document.addEventListener('DOMContentLoaded', function () {
  appNode = document.createElement('div')
  document.body.appendChild(appNode)
  update()
})
