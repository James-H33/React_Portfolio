var React = require('react');
var Nav = require('Nav');


var Main = React.createClass({
  render: function() {
    return (
      <div className="main-wrapper">
        <Nav />
        <div className="main-children-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
