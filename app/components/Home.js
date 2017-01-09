var React = require('react');
var ReactDOM = require('react-dom');
var Techniques = require('../components/Techniques');

class Home extends React.Component {
    render() {
        return (
          <div>
            <h2 className="text-center">List of all techniques</h2>
            <Techniques />
          </div>
        )
    }
}

module.exports = Home;
