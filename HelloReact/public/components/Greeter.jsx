var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

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

module.exports = Greeter;
