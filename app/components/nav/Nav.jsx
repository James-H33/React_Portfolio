var React = require('react');
var {Link, IndexLink} = require('react-router');

// Nav Css
require('style!css!sass!NavStyles');

var Nav = React.createClass({
  getInitialState: function() {
    return {
      menuToggle: 'nav-wrapper',
      navOpen: 'nav-icon-open',
    }
  },
  handleClick: function() {
    if(this.state.menuToggle === 'nav-wrapper') {
      this.setState({
        menuToggle: 'nav-wrapper active-menu',
        navOpen: 'nav-icon-open active-open',
      });
    } else {
      this.setState({
        menuToggle: 'nav-wrapper',
        navOpen: 'nav-icon-open',
      });
    }
  },
  render: function() {
    return (
      <div className={this.state.menuToggle}>
        <div className={this.state.navOpen} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={'nav-icon-close'} onClick={this.handleClick}>
            <span></span>
            <span></span>
        </div>
        <div className="nav-logo">
          <img src={require('app/components/nav/react-profile-logo.png')} />
        </div>
        <div className="nav-display">
          <ul>
            <li>
              <IndexLink to="/" activeClassName="active" onClick={this.handleClick} activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/projects" activeClassName="active" onClick={this.handleClick} activeStyle={{fontWeight: 'bold'}}>Projects</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active" onClick={this.handleClick} activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
