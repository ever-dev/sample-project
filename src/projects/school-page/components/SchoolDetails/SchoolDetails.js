import React from 'react';
import FormLayout from './../FormLayout/FormLayout';
import {Button, Form, InputGroup} from 'react-bootstrap';

class SchoolDetails extends React.Component {
  render() {
    return (
      <FormLayout
        curStep={this.props.curStep}
        stepCount={this.props.stepCount}
        prevPage={this.props.prevPage}>
        <h4 className="form-title">School Details</h4>
        <div className="form-content">
          <Form.Group>
            <Form.Label>School Name</Form.Label>
            <Form.Control type="text" placeholder="SchoolName"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>School Website</Form.Label>
            <Form.Control type="text" placeholder="School Website URL"></Form.Control>
            <InputGroup>
              <Form.Control type="text" placeholder="School Website URL 2"></Form.Control>
              <InputGroup.Append>
                <Button className="remove-btn"><i className="fa fa-times"></i></Button>
              </InputGroup.Append>
            </InputGroup>
            <Button className="add-btn">
              <i className="fa fa-plus"></i>
            </Button>
          </Form.Group>
          <Form.Group>
            <Form.Label>Timezone</Form.Label>
            <Form.Control as="select" placeholder="SchoolName">
              <option>New York, NY (GMT-4)</option>
              <option>New York, NY (GMT-4)</option>
              <option>New York, NY (GMT-4)</option>
              <option>New York, NY (GMT-4)</option>
              <option>New York, NY (GMT-4)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>CRM ID#</Form.Label>
            <Form.Control type="text" placeholder="CRM ID#"></Form.Control>
          </Form.Group>
        </div>
        <Form.Group className="action">
          <Button variant="primary" onClick={this.props.next}>Next</Button>
        </Form.Group>
      </FormLayout>
    );
  }
}

export default SchoolDetails;