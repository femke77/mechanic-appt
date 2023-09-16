import * as React from 'react';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import 'devextreme/dist/css/dx.light.css';
import '../App.css';
 
// import { Scheduler } from 'devextreme-react/scheduler';
 
function App() {

  return (
    <React.Fragment>
      <AppAppBar />
      {/* <div className="schedule-container">
      <Scheduler className="scheduler">
        </Scheduler>
        </div> */}
      <AppFooter />
    </React.Fragment>
  );
}

const AppWithRoot = withRoot(App);

export default AppWithRoot;
