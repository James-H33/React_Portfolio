var React = require('react');

// Project Styles
require('style!css!sass!ProjectStyles');

var Projects = React.createClass({
  render: function() {
    return (
      <div className="project-intro-wrapper">
        <div className="project-intro-display">
          <ul>

              <li>
                <div className="project-panel">
                    <figure className="project-1">
                      <span>
                        <p>Project One</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                    <figure>
                      <span>
                        <p>Project One</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                </div>
              </li>

              <li>
                <div className="project-panel">
                    <figure className="project-2">
                      <span>
                        <p>Project Two</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                    <figure>
                      <span>
                        <p>Project Two</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                </div>
              </li>

              <li>
                <div className="project-panel">
                    <figure className="project-3">
                      <span>
                        <p>Project Three</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                    <figure>
                      <span>
                        <p>Project Three</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                </div>
              </li>
              <li>
                <div className="project-panel">
                    <figure className="project-1">
                      <span>
                        <p>Project One</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                    <figure>
                      <span>
                        <p>Project One</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                </div>
              </li>

              <li>
                <div className="project-panel">
                    <figure className="project-2">
                      <span>
                        <p>Project Two</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                    <figure>
                      <span>
                        <p>Project Two</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                </div>
              </li>

              <li>
                <div className="project-panel">
                    <figure className="project-3">
                      <span>
                        <p>Project Three</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                    <figure>
                      <span>
                        <p>Project Three</p>
                        <hr></hr>
                        <p>2016</p>
                      </span>
                    </figure>
                </div>
              </li>

          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Projects;
