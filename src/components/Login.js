import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signIn } from "../reducers/signin";
import { fetchAllUsers } from "../reducers/users";

class Login extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
  }

  componentDidMount() {
    this.props.dispatch(fetchAllUsers());
  }

  renderUserOptions() {
    const { users } = this.props;

    const options = () => Object.values(users).map(user => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ));

    return users ? options() : (<option>Loading...</option>);
  }

  render() {
    const { history, users, location } = this.props;
    let { from } = location.state || { from: { pathname: "/" } };

    return (
      <div>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="form-group">
            <label htmlFor="users">Select an existing user</label>
            <select className="form-control" id="users" ref={this.usernameRef}>
              {this.renderUserOptions()}
            </select>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={event => {
              const username = this.usernameRef.current.value;

              event.preventDefault();
              this.props.dispatch(signIn(this.props.users[username]));
              history.push(from);
            }}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default withRouter(connect(mapStateToProps)(Login));
