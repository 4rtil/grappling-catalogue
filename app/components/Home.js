var React = require('react');
var ReactDOM = require('react-dom');
var TechniquesList = require('../components/TechniquesList');

var Home = React.createClass({
    render: function() {
        return (
          <div>
            <h2 className="text-center">List of all techniques</h2>
            <TechniquesList />
          </div>
        )
    }
});

module.exports = Home;
