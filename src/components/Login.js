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
import LOGIN_MUTATION from "../graphql/mutation/LOGIN_MUTATION";

class Login extends Component {
  state = {
    values: {
      email: "a@a.com",
      password: "a",
    }
  };
  handleLoginSubmit = async () => {
    console.log('\n', 'HELLO handleRegisterSubmit' )
    const {
      values: { email, password }
    } = this.state;
    const { loginMutation } = this.props;

    let res;
    try {
      res = await loginMutation({
        variables: {
          email,
          password
        }})
    } catch (e) {
      console.log('\n', 'loginMutation Error', '\n', e )
    }
    console.log('\n', 'res', '\n', '\n', res )

    if(!!res.data) {
      console.log('\n', 'hello if block', '\n', '\n' )
      this.props.history.push("/", {
        message: "You have sucessfully logged in!"
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
      values: { email, password }
    } = this.state;
    console.log("\n", "this.props", "\n", "\n", this.props);

    return (
      <Grid>
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <form
              onSubmit={e => {
                e.preventDefault();

                this.handleLoginSubmit();
              }}
            >
              <FormGroup>
                <ControlLabel>Register Bumblesquats!</ControlLabel>
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
  graphql(LOGIN_MUTATION, {
    name: "loginMutation"
  }),
)(Login);
