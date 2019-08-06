import React from 'react';
import FormLayout from './../FormLayout/FormLayout';
import { Button, Form, InputGroup, ButtonGroup } from 'react-bootstrap';

class SchoolStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: false
    }
  }
  render() {
    return (
      <FormLayout
        curStep={this.props.curStep}
        stepCount={this.props.stepCount}
        prevPage={this.props.prevPage}>
        <h4 className="form-title">School Status</h4>
        <div class="form-content">
          <Form.Group className="d-flex flex-column">
            <ButtonGroup>
              <Button className={this.state.locked ? 'col-6 active' : 'col-6'} onClick={() => {
                this.setState({locked: true});
              }}>Locked</Button>
              <Button className={!this.state.locked ? 'col-6 active' : 'col-6'} onClick={() => {
                this.setState({locked: false});
              }}>Unlocked</Button>            
            </ButtonGroup>
          </Form.Group>
          { this.state.locked ? 
            <Form.Group>
            <Form.Label>Set optiional date to become unlocked.</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="calendar-badge"><i className="fa fa-calendar"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text"/>
            </InputGroup>
          </Form.Group> : <></>
          }
        </div>
        <Form.Group className="action">
          <Button variant="success" onClick={this.props.next}>Create School</Button>
        </Form.Group>
      </FormLayout>
    );
  }
}

export default SchoolStatus;