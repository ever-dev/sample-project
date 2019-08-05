import React from 'react';
import FormLayout from './../FormLayout/FormLayout';
import { Button } from 'react-bootstrap';

class ScheduleType extends React.Component {
  render() {
    return (
      <FormLayout
        curStep={this.props.curStep}
        stepCount={this.props.stepCount}
        prevPage={this.props.prevPage}>
        <h4 className="form-title">Schedule Type</h4>
        <Button variant="primary" onClick={this.props.next}>Next</Button>
      </FormLayout>
    );
  }
}

export default ScheduleType;