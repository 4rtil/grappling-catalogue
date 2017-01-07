var React = require('react');

class Home extends React.Component {
  render() {

    //TODO: find a better solution for loading data
    var data = require('json-loader!../data/store');
    data = JSON.stringify(data);

    return (
      <div>
        <h2 className="text-center">List of all BJJ techniques I know</h2>
        {data}
      </div>
    )
  }
}

module.exports = Home;
