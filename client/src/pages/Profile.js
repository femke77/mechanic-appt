import * as React from 'react';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/Queries';
import { Box } from '@mui/material';

function Profile() {
 const {data, loading, error} = useQuery(QUERY_ME)
  const me = data?.me || {}
 
  if (loading) return <h2>loading...</h2>
 return (
      <React.Fragment>
        <AppAppBar />
        <Box sx={{p:2}}>
        <h2>Your Appointments</h2>
        {me && 
        me.appointments.map(appt => (
          <div key={appt._id}>
          <p>Date: {appt.startDate}</p>
          <p>Work Requested:  {appt.workRequest}</p>
          <p>Car: {appt.car.year} {"BMW" } {appt.car.model}</p>
           <hr/>
          </div>
        ))
        }
        </Box>
        <AppFooter />
      </React.Fragment>
    );
  }

  export default withRoot(Profile);