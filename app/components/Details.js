var React = require('react');
var ReactRouter = require('react-router');
var data = require('json-loader!../data/store');

class Details extends React.Component {

  render() {
    //TODO: find a better solution for loading data
    var data = require('json-loader!../data/store');

    return (
      <div>
        <div>Id: {this.props.params.id}</div>
        [data[this.props.params.id]]
      </div>
    )
  }
};

module.exports = Details;
