import React from 'react';
import FormLayout from './../FormLayout/FormLayout';
import {Button} from 'react-bootstrap';

class SchoolDetails extends React.Component {
  render() {
    return (
      <FormLayout
        curStep={this.props.curStep}
        stepCount={this.props.stepCount}
        prevPage={this.props.prevPage}>
        <h4 className="form-title">School Details</h4>
        <Button variant="primary" onClick={this.props.next}>Next</Button>
      </FormLayout>
    );
  }
}

export default SchoolDetails;