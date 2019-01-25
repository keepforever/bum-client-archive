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
import ADD_DECK_MUTATION from "../graphql/mutation/ADD_DECK_MUTATION";

const defaultState = {
  values: {
    name: "",
    deckList: "",
    description: ""
  }
};
class AddDeck extends Component {
  state = defaultState;

  handleAddDeckSubmit = async () => {
    console.log("\n", "HELLO handleAddDeckSubmit");
    const {
      values: { name, deckList, description }
    } = this.state;
    const { addDeckMutation } = this.props;

    let res;
    try {
      res = await addDeckMutation({
        variables: {
          name,
          deckList,
          description
        }
      });
    } catch (e) {
      console.log("\n", "addDeckMutation Error", "\n", e);
    }
    console.log("\n", "AddDeck.js: res", "\n", "\n", res);

    this.setState({
      ...defaultState
    })
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
      values: { name, deckList, description }
    } = this.state;
    console.log("\n", "AddDeck.js: this.props", "\n", "\n", this.props);

    return (
      <Grid>
        <Row>
          <Col xs={12} md={6} mdOffset={3}>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.handleAddDeckSubmit();
              }}
            >
              <FormGroup>
                <ControlLabel>
                  <h1>Add a Deck</h1>
                </ControlLabel>
                <FormControl
                  id="name"
                  type="text"
                  value={name}
                  placeholder="Enter deck name..."
                  onChange={e => this.handleChangeText("name", e.target.value)}
                />

                <ControlLabel>Description</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="Describe your deck..."
                  type="textarea"
                  value={description}
                  onChange={e =>
                    this.handleChangeText("description", e.target.value)
                  }
                />

                <ControlLabel>Deck List</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="Paste ARENA output here..."
                  type="textarea"
                  value={deckList}
                  onChange={e =>
                    this.handleChangeText("deckList", e.target.value)
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
  graphql(ADD_DECK_MUTATION, {
    name: "addDeckMutation"
  })
)(AddDeck);
