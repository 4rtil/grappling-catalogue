var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>4rtils Grappling Catalogue</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
});

module.exports = Main;
