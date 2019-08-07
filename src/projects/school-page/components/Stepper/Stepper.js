import React from 'react';
import './Stepper.scss';

class Stepper extends React.Component {
  render() {
    const stepCount = Number(this.props.stepCount);
    const curStep = Number(this.props.curStep);
    const stepBar = [];
    for (let i = 1; i <= stepCount; i++) {
      if (i < curStep) {
        stepBar.push(<div key={'dot'+i} className="step-dot done"></div>);
        if (i !== stepCount) {
          stepBar.push(<div key={'line'+i} className="step-line done"></div>);
        }
      } else if (i === curStep) {
        stepBar.push(<div key={'dot'+i} className="step-dot current"></div>);
        if (i !== stepCount) {
          stepBar.push(<div key={'line'+i} className="step-line"></div>);
        }
      } else {
        stepBar.push(<div key={'dot'+i} className="step-dot"></div>);
        if (i !== stepCount) {
          stepBar.push(<div key={'line'+i} className="step-line"></div>);
        }
      }
    }
    return (
      <div className="stepper">
        {stepBar}
      </div>
    );
  }
}

export default Stepper;