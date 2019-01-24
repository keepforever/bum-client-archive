import React from "react";
import { Panel } from "react-bootstrap";

export default ({ name, description, deckList }) => {
  return (
    <Panel
      style={{
        maxWidth: "500px",
        minWidth: '300px',
        display: "inline-block"
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
      <Panel.Footer>{description}</Panel.Footer>
    </Panel>
  );
};
