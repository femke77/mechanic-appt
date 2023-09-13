import * as React from 'react';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import 'devextreme/dist/css/dx.light.css';
import '../';
 
import { Scheduler } from 'devextreme-react/scheduler';
 
function App() {

  return (
    <React.Fragment>
      <AppAppBar />
      <Scheduler id="scheduler">
        </Scheduler>
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
