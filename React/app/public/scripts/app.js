'use strict';

// JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'This is from JSX'
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
