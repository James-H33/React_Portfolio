var React = require('react');

// Home Styles
require('style!css!sass!HomeStyles');

var Home = React.createClass({
  render: function() {
    return (
      <div className="home-wrapper">
        <div className="home-display">
          <div className="home-text">
            <p> <span>H</span>ello. </p>
            <p> <span>I</span>m <span>J</span>ames. </p>
            <p> <span>F</span>ull <span>S</span>tack <span>D</span>eveloper from the <span>U</span>nited <span>S</span>tates. </p>
            <ul>
              <li><a href="https://github.com/James-H33"> GITHUB </a></li>
              <li><a href="https://facebook.github.io/react/"> REACT </a></li>
              <li><a href="https://nodejs.org/en/">  NODE </a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
