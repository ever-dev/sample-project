import React from 'react';
import { Button } from 'react-bootstrap';

class StartComponent extends React.Component {
  render() {
    return (
      <Button variant="primary" onClick={this.props.next}>Create New School</Button>
    );
  }
}

export default StartComponent;