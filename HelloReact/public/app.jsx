var React = require('react');
var ReactDOM = require('react-dom');

// a nested component: responsible for only one thing in React
// a presentational component: don't maintain state, simply renders and calls functions
var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name
    var msg = this.props.msg

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{msg}</p>
      </div>
    )
  }
})

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

// React naming convention: camelcase for every word
// a React component
// every React component needs a render method
// a container component: maintain states, render children
var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      msg: 'This is default message from a component'
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      msg: this.props.msg
    }
  },
  handleButtonClick: function(updates){
    this.setState(updates)
  },
  render: function(){
    var name = this.state.name
    var msg = this.state.msg
    // can only return one root html element
    // babeljs.io/repl
    return (
      <div>
        <GreeterMessage name={name} msg={msg}/>
        <GreeterForm onButtonClick={this.handleButtonClick}/>
      </div>
    )
  }
})

/*
ReactDOM.render(
  <h1>Hello React!</h1>,
  document.getElementById('app')
)
*/
var firstName = "Isa"
var message = "This is a default message from prop"
ReactDOM.render(
  <Greeter name={firstName} msg={message}/>,
  document.getElementById('app')
)
