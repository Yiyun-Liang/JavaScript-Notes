// require and then exports
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

module.exports = GreeterMessage;
