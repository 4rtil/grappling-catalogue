var React = require('react');
var ReactRouter = require('react-router');
var data = require('json-loader!../data/store');

var output = [];
var element;

for (element in data) {
  output.push(
    <article key={data[element].id}>
      <h1>{data[element].title}</h1>
      <section>{data[element].description}</section>
    </article>
  );
}

class Techniques extends React.Component {

    render() {
      return <div>{output}</div>;
    }
}

module.exports = Techniques;
