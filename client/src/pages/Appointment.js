import * as React from 'react';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import 'devextreme/dist/css/dx.light.css';
import '../App.css';
import AppointmentForm from '../pages/AppointmentForm';
// import { Scheduler } from 'devextreme-react/scheduler';
 
function Appointment() {

  return (
    <React.Fragment>
      <AppAppBar />
      <AppointmentForm/>
      {/* <div className="schedule-container">
      <Scheduler className="scheduler">
        </Scheduler>
        </div> */}
      <AppFooter />
    </React.Fragment>
  );
}

const AppointmentWithRoot = withRoot(Appointment);

export default AppointmentWithRoot;
