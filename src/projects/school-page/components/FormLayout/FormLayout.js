import React from 'react';
import Stepper from './../Stepper/Stepper';
import './FormLayout.scss';

class FormLayout extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="toolbar">
          <a onClick={this.props.prevPage}><span>Cancel(esc)</span>&nbsp;&nbsp;<i className="fas fa-times"></i></a>
        </div>
        <div className="main-content">
          <div className="content-header">
            <h2>Create New School</h2>
          </div>
          <Stepper stepCount={this.props.stepCount} curStep={this.props.curStep} />
          <div className="form-container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default FormLayout;