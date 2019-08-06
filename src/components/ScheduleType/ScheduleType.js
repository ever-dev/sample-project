import React from 'react';
import FormLayout from './../FormLayout/FormLayout';
import { Button, Form, ButtonGroup, InputGroup } from 'react-bootstrap';

class ScheduleType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleType: 'static'
    };
  }
  render() {
    return (
      <FormLayout
        curStep={this.props.curStep}
        stepCount={this.props.stepCount}
        prevPage={this.props.prevPage}>
        <h4 className="form-title">Schedule Type</h4>
        <div className="form-content">
          <Form.Group className="d-flex flex-column">
            <ButtonGroup>
              <Button className={this.state.scheduleType === 'static' ? 'col-6 active' : 'col-6'} onClick={() => {
                this.setState({scheduleType: 'static'});
              }}>Static</Button>
              <Button className={this.state.scheduleType === 'multiday' ? 'col-6 active' : 'col-6'} onClick={() => {
                this.setState({scheduleType: 'multiday'});
              }}>MultiDay</Button>            
            </ButtonGroup>
          </Form.Group>
          {this.state.scheduleType === 'static' ? 
            <Form.Group>
              <Form.Label>Add Static Days</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="calendar-badge"><i className="fa fa-calendar"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="A (Mondays)" />
                <InputGroup.Append>
                  <Button className="remove-btn"><i className="fa fa-times"></i></Button>
                </InputGroup.Append>
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="calendar-badge"><i className="fa fa-calendar"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="B (Tuesdays)" />
                <InputGroup.Append>
                  <Button className="remove-btn"><i className="fa fa-times"></i></Button>
                </InputGroup.Append>
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="calendar-badge"><i className="fa fa-calendar"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="C (Wednesdays)" />
                <InputGroup.Append>
                  <Button className="remove-btn"><i className="fa fa-times"></i></Button>
                </InputGroup.Append>
              </InputGroup>
              <Button className="add-btn"><i className="fa fa-plus"></i></Button>
            </Form.Group> :
            <Form.Group>
            <Form.Label>Add Multi Days</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="calendar-badge"><i className="fa fa-calendar"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="A (Mondays, Wednesdays, Fridays)" />
              <InputGroup.Append>
                <Button className="remove-btn"><i className="fa fa-times"></i></Button>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="calendar-badge"><i className="fa fa-calendar"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="B (Tuesdays, Thursdays)" />
              <InputGroup.Append>
                <Button className="remove-btn"><i className="fa fa-times"></i></Button>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="calendar-badge"><i className="fa fa-calendar"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="C (Wednesdays, Fridays)" />
              <InputGroup.Append>
                <Button className="remove-btn"><i className="fa fa-times"></i></Button>
              </InputGroup.Append>
            </InputGroup>
            <Button className="add-btn"><i className="fa fa-plus"></i></Button>
          </Form.Group>}
        </div>
        <Form.Group className="action">
          <Button variant="primary" onClick={this.props.next}>Next</Button>
        </Form.Group>
      </FormLayout>
    );
  }
}

export default ScheduleType;