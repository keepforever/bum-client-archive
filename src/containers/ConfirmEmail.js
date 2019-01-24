import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import CONFIRM_EMAIL_MUTATION from "../graphql/mutation/CONFIRM_EMAIL_MUTATION";

class ConfirmEmail extends Component {

  componentDidMount = async () => {
    let res;
    try {
      res = this.confirmEmailSubmit()
      console.log('\n', 'ConfirmEmail:componentDidMount, res:', '\n', '\n', res )
    } catch (e) {
      console.log('\n', 'e', '\n', '\n', e )
    }
  }

  confirmEmailSubmit = async () => {
    console.log("\n", "HELLO confirmEmailSubmit");

    const {
      match: {
        params: { token }
      }
    } = this.props;

    const { confirmEmailMutation } = this.props;

    let res;
    try {
      res = await confirmEmailMutation({
        variables: {
          token
        }
      });
    } catch (e) {
      console.log("\n", "confirmEmailMutation Error", "\n", e);
    }
    console.log("\n", "res", "\n", "\n", res);

    if(!!res.data.confirmUser) {
      console.log('\n', 'hello if block', '\n', '\n' )
      this.props.history.push("/login", {
        message: "Please login and enjoy!"
      })
    }

  };



  render() {
    console.log('\n', 'this.props', '\n', '\n', this.props )
    const {
      match: {
        params: { token }
      }
    } = this.props;

    return (
      <React.Fragment>
        <h1>{token}</h1>
        <h2>Confirming Email...</h2>
      </React.Fragment>
    );
  }
}

export default compose(
  graphql(CONFIRM_EMAIL_MUTATION, {
    name: "confirmEmailMutation"
  })
)(ConfirmEmail);
