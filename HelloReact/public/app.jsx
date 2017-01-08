var React = require('react');
var ReactDOM = require('react-dom');
//these are used in Greeter.js only
//var GreeterMessage = require('./components/GreeterMessage');
//var GreeterForm = require('./components/GreeterForm');
var Greeter = require('./components/Greeter');

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
