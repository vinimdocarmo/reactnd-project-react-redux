import React, { Component } from "react";
import { createQuestion } from "../reducers/questions";
import { connect } from "react-redux";

class NewPoll extends Component {
  constructor(props) {
    super(props);

    this.optionOneRef = React.createRef();
    this.optionTwoRef = React.createRef();
  }

  handleCreate(e) {
    e.preventDefault();

    const optionsOneText = this.optionOneRef.current.value;
    const optionsTwoText = this.optionTwoRef.current.value;

    this.props.dispatch(
      createQuestion(optionsOneText, optionsTwoText, this.props.authedUser)
    );

    this.props.history.push({ pathname: "/" });
  }

  render() {
    return (
      <div className="container">
        <h1>Whould you rather</h1>
        <form>
          <div className="form-group">
            <label htmlFor="optionOne">Option one</label>
            <input
              className="form-control"
              id="optionOne"
              ref={this.optionOneRef}
            />
          </div>

          <div className="form-group">
            <label htmlFor="optionTwo">Option two</label>
            <input
              className="form-control"
              id="optionTwo"
              ref={this.optionTwoRef}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={e => this.handleCreate(e)}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ signin }) => ({ authedUser: signin.user.id });

export default connect(mapStateToProps)(NewPoll);
