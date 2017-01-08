var React = require('react');
var ReactDOM = require('react-dom');

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault()

    var updates = {}
    var name = this.refs.name.value
    var msg = this.refs.msg.value

    if(name.length > 0){
      this.refs.name.value = ''
      updates.name = name
    }

    if(msg.length > 0){
      this.refs.msg.value = ''
      updates.msg = msg
    }

    this.props.onButtonClick(updates)
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="enter your name"/>
        </div>
        <div>
          <textarea ref="msg" placeholder="enter your text"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
})

module.exports = GreeterForm;
