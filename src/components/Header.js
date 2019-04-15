import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Would You Rather?
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            <span
              className="navbar-text"
              style={{ marginRight: 5, color: "black" }}
            >
              {this.props.authedUser.name} |
            </span>
            <Link className="navbar-text" to="/signout">
              Sign out
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ signin }) => ({
  authedUser: signin.user
});

export default withRouter(connect(mapStateToProps)(Header));
