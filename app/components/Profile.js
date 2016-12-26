var React = require('react');
var ReactRouter = require('react-router');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  render: function (){
    return (
      <div>
        <div>User's profile --> {this.props.params.username}</div>
        <div>Repos</div>
        <div>Notes</div>
      </div>
    )
  }
});

module.exports = Profile;
