var React = require('react');

// About Css
require('style!css!sass!AboutStyles');

var About = React.createClass({
  render: function() {
    return (
      <div className="about-wrapper">
        <div className="about-display">
          <h2> halltreworgy.james<span>@</span>gmail.com</h2>
          <hr></hr>
          <ul>
            <li><a href="">TWITTER</a></li>
            <li><a href="">FACEBOOK</a></li>
            <li><a href="https://github.com/James-H33">GITHUB</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = About;
