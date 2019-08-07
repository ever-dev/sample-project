import React from 'react';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './SchoolPageComponent.scss';

import StartComponent from './../StartComponent/StartComponent';
import SchoolDetail from './../SchoolDetails/SchoolDetails';
import ScheduleType from './../ScheduleType/ScheduleType';
import UploadCSV from './../UploadCSV/UploadCSV';
import SchoolStatus from './../SchoolStatus/SchoolStatus';
import FinishComponent from './../FinishComponent/FinishComponent';

function SchoolPageComponent() {
  const [curStep, setCurStep] = React.useState(0);
  const totalPages = 6;
  const stepCount = 4;

  const nextPage = () => {
    if (curStep < totalPages) {
      setCurStep(curStep + 1);
    }
  };
  const prevPage = () => {
    if (curStep > 0) {
      setCurStep(curStep - 1);
    }
  };
  return (
    <div className="component-wrapper">
      {
        curStep === 0 ? <StartComponent stepCount={stepCount} curStep={curStep} next={nextPage}/> : 
        curStep === 1 ? <SchoolDetail stepCount={stepCount} curStep={curStep} next={nextPage} prev={prevPage} /> :
        curStep === 2 ? <ScheduleType stepCount={stepCount} curStep={curStep} next={nextPage} prev={prevPage} /> :
        curStep === 3 ? <UploadCSV stepCount={stepCount} curStep={curStep} next={nextPage} prev={prevPage} /> :
        curStep === 4 ? <SchoolStatus stepCount={stepCount} curStep={curStep} next={nextPage} prev={prevPage} /> :
        curStep === 5 ? <FinishComponent stepCount={stepCount} curStep={curStep} prev={prevPage} /> : <></>
      }
    </div>
  );
}

export default SchoolPageComponent;