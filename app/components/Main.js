var React = require('react');

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>4rtils Grappling Catalogue</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
};

module.exports = Main;
