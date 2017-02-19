const createElement = require('inferno-create-element')
const hyperx = require('hyperx')
const html = hyperx(createElement)
const css = require('sheetify')

const red = css`:host {
  color: red;
}`

function component (props) {
  return html`<div>
    <input type='text' value=${props.message} oninput=${onEditMessage} />
    <h3 class=${red}>${props.message}</h3>
  </div>`

  function onEditMessage (e) {
    props.editMessage(e.target.value)
  }
}

module.exports = component
