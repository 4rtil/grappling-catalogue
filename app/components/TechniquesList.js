var React = require('react');
var ReactRouter = require('react-router');
var data = require('json-loader!../data/store');

var TechniquesList = React.createClass({
    render: function() {

      var techniquesList = data.map(function(technique, index) {
        var temp = Object.getOwnPropertyNames(technique);
        //for (prop in technique) {}
        console.log(technique.keys);
        return <article key={index}>{temp}</article>;
      });

      return <section>{techniquesList}</section>;
    }
});

module.exports = TechniquesList;
