import React from "react";
import { Panel } from "react-bootstrap";

export default ({ name, description, deckList }) => {
  return (
      <Panel style={{
        maxWidth: "500px",
        display: "inline-block",
      }}>
        <Panel.Heading>
          <Panel.Title componentClass="h2">
            {`Name: ${name}: ${description}`}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p style={{ whiteSpace: "pre", textAlign: "left" }}>{deckList}</p>
        </Panel.Body>
      </Panel>
  );
};
