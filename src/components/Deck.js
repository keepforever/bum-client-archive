import React, { Component } from "react";
import { compose, graphql } from "react-apollo";
import { Panel, Row, Col, Button, Alert } from "react-bootstrap";
// see emojilib in node_modules for key list
import emoji from "emoji-dictionary";

import { CopyToClipboard } from "react-copy-to-clipboard";
import VOTE_FOR_DECK_MUTATION from "../graphql/mutation/VOTE_FOR_DECK_MUTATION";

class Deck extends Component {
  state = {
    isSubmitting: false,
    copied: false
  };

  handleVote = async (id, quality) => {
    console.log("\n", "HELLO handleVoteSubmit");

    const { voteForDeckMutation } = this.props;

    console.log('\n', 'typeof id', '\n', '\n', typeof id )

    let res;
    try {
      res = await voteForDeckMutation({
        variables: {
          deckId: parseInt(id, 10),
          quality
        }
      });
    } catch (e) {
      console.log("\n", "voteForDeckMutation Error", "\n", e);
    }
    console.log("\n", "AddDeck.js: res", "\n", "\n", res);
  };

  handleCopy = id => {
    console.log("\n", `deck ${id} copied`, "\n", "\n");
  };

  handleToggleCopied = name => {
    this.setState(state => ({
      copied: !state.copied
    }));

    setTimeout(() => {
      this.setState(state => ({
        copied: !state.copied
      }));
    }, 2000);
  };

  render() {
    const { name, description, deckList, voteScore, id } = this.props;
    const { copied } = this.state;

    return (
      <Panel
        style={{
          maxWidth: "750px",
          minWidth: "400px"
        }}
      >
        <Panel.Heading>
          <Panel.Title toggle>{name}</Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body style={{ whiteSpace: "pre", textAlign: "left" }}>
            {deckList}
          </Panel.Body>
        </Panel.Collapse>
        <Panel.Footer>
          <Row>
            <Col md={7} sm={7} xs={7}>
            <div style={{textAlign: "left", fontSize: '20px'}}>
            {description}
            </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} sm={4} xs={4} style={{padding: 5}}>
              <Button
                style={{ fontSize: "30px" }}
                block
                bsStyle="danger"
                bsSize="large"
                onClick={() => this.handleVote(id, false)}
              >
                {emoji.getUnicode("vomiting")}
              </Button>
            </Col>
            <Col md={4} sm={4} xs={4} style={{padding: 5}}>
              <Button
                style={{ fontSize: "30px" }}
                block
                bsStyle="success"
                bsSize="large"
                onClick={() => this.handleVote(id, true)}
              >
                {emoji.getUnicode("heart_eyes")}
              </Button>
            </Col>
            <Col md={4} sm={4} xs={4} style={{padding: 5}}>
              <CopyToClipboard
                onCopy={() => this.handleToggleCopied()}
                text={deckList}
              >
                <Button
                  style={{ fontSize: "30px"}}
                  block
                  disabled={copied}
                  bsStyle="primary"
                  bsSize="large"
                  onClick={() => this.handleCopy(name)}
                >
                  COPY
                </Button>
              </CopyToClipboard>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3
                style={{ textAlign: "right", paddingRight: "15px" }}
              >{`Vote total: ${voteScore}`}</h3>
            </Col>
          </Row>
          {copied && (
            <Row>
              <Alert bsStyle="warning">
                <strong>{`${name} Copied to Clipboard!`}</strong>
              </Alert>
            </Row>
          )}
        </Panel.Footer>
      </Panel>
    );
  }
}

export default compose(
  graphql(VOTE_FOR_DECK_MUTATION, {
    name: "voteForDeckMutation"
  })
)(Deck);
