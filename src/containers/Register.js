import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { graphql, compose } from "react-apollo";
import REGISTER_MUTATION from "../graphql/mutation/REGISTER_MUTATION";

class Register extends Component {
  state = {
    values: {
      email: "",
      password: "alpha",
      nickName: ""
    }
  };
  handleRegisterSubmit = async () => {
    console.log('\n', 'HELLO handleRegisterSubmit' )
    const {
      values: { email, password, nickName }
    } = this.state;
    const { registerMutation } = this.props;

    let res;
    try {
      res = await registerMutation({
        variables: {
          nickName,
          email,
          password
        }})
    } catch (e) {
      console.log('\n', 'registerMutation Error', '\n', e )
    }
    console.log('\n', 'res', '\n', '\n', res )

    if(!!res.data) {
      console.log('\n', 'hello if block', '\n', '\n' )
      this.props.history.push("/add", {
        message: "check your email to confirm your account"
      })
    }
  };

  handleChangeText = (key, value) => {
    this.setState(state => ({
      values: {
        ...state.values,
        [key]: value
      }
    }));
  };

  render() {
    const {
      values: { email, password, nickName }
    } = this.state;
    console.log("\n", "this.props", "\n", "\n", this.props);

    return (
      <Grid>
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.handleRegisterSubmit();
              }}
            >
              <FormGroup>
                <ControlLabel>Register Bumblesquats!</ControlLabel>
                <FormControl
                  id="nickName"
                  type="text"
                  value={nickName}
                  placeholder="Enter nickname"
                  onChange={e =>
                    this.handleChangeText("nickName", e.target.value)
                  }
                />
                <FormControl
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={e => this.handleChangeText("email", e.target.value)}
                />
                <FormControl
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={e =>
                    this.handleChangeText("password", e.target.value)
                  }
                />
                <FormControl.Feedback />
              </FormGroup>
              <Button block bsStyle="primary" bsSize="large" type="submit">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default compose(
  graphql(REGISTER_MUTATION, {
    name: "registerMutation"
  }),
)(Register);
