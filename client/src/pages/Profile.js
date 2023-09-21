import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/Queries";
import { Box } from "@mui/material";
import Auth from "../utils/Auth.js";
import dayjs from "dayjs";

function Profile() {
  const { data, loading, error } = useQuery(QUERY_ME);
  const me = data?.me || {};

  const loggedIn = Auth.loggedIn();


  if (loading) return <h2>Loading...</h2>;
  return (
    <React.Fragment>
      <AppAppBar />
      <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <h2>Your Appointments</h2>
   
        {loggedIn && me
          ? me.appointments.map((appt) => (
              <div key={appt._id}>
                <p>Date: {appt.startDate}</p>
                <p>Work Requested: {appt.workRequest}</p>
                <p>
                  Car: {"BMW"} {appt.car.model} {appt.car.year}
                </p>
                <p>Mechanic's notes: {appt.notes}</p>
                <hr />
              </div>
            ))
          : window.location.assign("/signin")}
      </Box>
      {error && <div>{error.message}</div>}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Profile);
