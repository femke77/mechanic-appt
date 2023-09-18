// import React, { createContext, useContext, useState } from "react";

// const AppointmentContext = createContext();

// export function useAppointment() {
//   return useContext(AppointmentContext);
// }

// export function AppointmentProvider({ children }) {
//   const [appointmentData, setAppointmentData] = useState(null);

//   const saveAppointmentData = (data) => {
//     setAppointmentData(data);
//   };

//   return (
//     <AppointmentContext.Provider value={{ appointmentData, saveAppointmentData }}>
//       {children}
//     </AppointmentContext.Provider>
//   );
// }