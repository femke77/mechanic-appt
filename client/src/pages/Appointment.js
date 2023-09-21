import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import "devextreme/dist/css/dx.light.css";
import "../App.css";
import AppointmentForm from "../modules/components/AppointmentForm";
import Auth from "../utils/Auth";

// import { Scheduler } from 'devextreme-react/scheduler';

function Appointment() {
  return (
    <React.Fragment>
      <AppAppBar />
      <div className="apptform-container">
        <AppointmentForm className="appt-form" />
      </div>
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
