var React = require('react');
var ReactRouter = require('react-router');
var data = require('json-loader!../data/store');

class Profile extends React.Component {
  render() {
    return (
      <div>
      <div>Id: {this.props.params.id}</div>
      [data[this.props.params.id]]
      </div>
    )
  }
}

module.exports = Profile;
