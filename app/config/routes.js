var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Details = require('../components/Details');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="technique/:id" component={Details} />
    <IndexRoute component={Home} />
  </Route>
);
