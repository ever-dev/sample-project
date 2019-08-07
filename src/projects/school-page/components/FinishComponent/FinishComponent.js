import React from 'react';
import { Button } from 'react-bootstrap';
import './FinishComponent.scss';

class FinishComponent extends React.Component {
  render() {
    return (
      <div className="finish">
        <div className="comments">
          <i className="far fa-check-circle"></i><span>Salisbury University</span>
        </div>
        <Button variant="success">Finish</Button>
      </div>
    );
  }
}

export default FinishComponent;