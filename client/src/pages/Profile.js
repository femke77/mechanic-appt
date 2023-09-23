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
      {!loggedIn && window.location.assign("/signin")}

      <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <h2>Your Upcoming Appointments</h2>
        <div>
          {me.appointments &&
            me.appointments
              .filter((appt) => dayjs(appt.startDate).isAfter(dayjs()))
              .map((appt) => (
                <div key={appt._id}>
                  <p>
                    Date: {dayjs(appt.startDate).format("MM/DD/YYYY hh:mma")}
                  </p>
                  <p>Work Requested: {appt.workRequest}</p>
                  <p>
                    Car: {"BMW"} {appt.car.model} {appt.car.year}
                  </p>

                  <hr />
                </div>
              ))}
          <h2>Your Past Appointments</h2> <br />
          {me.appointments
            .filter((appt) => dayjs(appt.startDate).isBefore(dayjs()))
            .map((appt) => (
              <div key={appt._id}>
                <p>Date: {dayjs(appt.startDate).format("MM/DD/YYYY hh:mma")}</p>
                <p>Work Requested: {appt.workRequest}</p>
                <p>
                  Car: {"BMW"} {appt.car.model} {appt.car.year}
                </p>
                <p>Mechanic's notes: {appt.notes}</p>
                <hr />
              </div>
            ))}
        </div>
      </Box>
      {error && <div>{error.message}</div>}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Profile);
