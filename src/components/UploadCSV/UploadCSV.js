import React from 'react';
import FormLayout from './../FormLayout/FormLayout';
import { Button, Form, InputGroup } from 'react-bootstrap';

class UploadCSV extends React.Component {
  render() {
    return (
      <FormLayout
        curStep={this.props.curStep}
        stepCount={this.props.stepCount}
        prevPage={this.props.prevPage}>
        <h4 className="form-title">Upload CSVs</h4>
        <div className="form-content">
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Upload Schedule Dates CSV</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control as="file"/>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Upload Classes CSV</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control as="file"/>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Upload Staff CSV</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control as="file"/>
            </InputGroup>
          </Form.Group>
        </div>
        <Form.Group className="action">
          <Button variant="primary" onClick={this.props.next}>Next</Button>
        </Form.Group>
      </FormLayout>
    );
  }
}

export default UploadCSV;