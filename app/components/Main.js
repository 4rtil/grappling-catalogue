var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <header>
        <nav><h1>4rtil's Grappling Catalogue</h1></nav>
        <div>{this.props.children}</div>
      </header>
    )
  }
});

module.exports = Main;
