var React = require('react');
var ReactRouter = require('react-router');
var data = require('json-loader!../data/store');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  render: function (){
    //TODO: find a better solution for loading data
    var data = require('json-loader!../data/store');

    return (
      <div>
        <div>Id: {this.props.params.id}</div>
        [data[this.props.params.id]]
      </div>
    )
  }
});

module.exports = Profile;
