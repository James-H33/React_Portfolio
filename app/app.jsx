var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Require Components
var Main = require('Main');
var Home = require('Home');
var Projects = require('Projects');
var About = require('About');

// App Css
require('style!css!sass!ApplicationStyles');

// Target Document ID
const APP = document.getElementById('app');

// ReactDOM.render(
//   <div>
//     <h1> Hello Portfolio</h1>
//     <Main />
//   </div>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="projects" component={Projects} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  APP,
);
