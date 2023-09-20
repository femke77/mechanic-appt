import { useState, useEffect } from "react";
import Dropdown from './ModelYearSelect'
import { useMutation } from "@apollo/client";
import { ADD_APPT } from "../utils/Mutations";
import withRoot from "../modules/withRoot";
import AppAppBar from '../modules/views/AppAppBar';
import dayjs from "dayjs"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AppointmentForm() {

  const [addAppointment, {error}] = useMutation(ADD_APPT)

  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const [value, setValue] = useState(dayjs().format("YYYY-MM-DD"));
  const [formState, setFormState] = useState({
    startDate: "08:00:00",
    workRequest: "",
  });

  const [formattedTimestamps, setFormattedTimestamps] = useState({
    start: "",
  });

  useEffect(() => {
    const { startDate } = formState;
    if (startDate && value)  {
 
      const formattedStart = `${dayjs(value).format("YYYY-MM-DD")}T${startDate}`;
     
      setFormattedTimestamps({
        start: formattedStart,
      });
    }
  }, [formState, value]);


  const handleYearChange = (year) => setYear(year);
  const handleModelChange = (model) => setModel(model);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await addAppointment({variables: {
        startDate: formattedTimestamps.start,
        workRequest: formState.workRequest,
        model,
        year

      }})
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  if (error) return <h2>{error.message}</h2>
  return (
    <>
         <AppAppBar />
      <form>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          // label="Controlled picker"
          value={dayjs(value)}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>


      {/* <input
          name="value"
          value={value}
          onChange={handleChange}
          type="date"
        /> */}


      <div className="input-group">
        <span className="input-group-text">Time</span>
        <select
          className="form-control"
          onChange={handleChange}
          name="startDate"
          id="exampleFormControlSelect1"
          value={formState.startDate}
        >
          <option value={`08:00:00`}>8:00am</option>
          <option value={`08:30:00`}>8:30am</option>
          <option value={`09:00:00`}>9:00am</option>
          <option value={`09:30:00`}>9:30am</option>
          <option value={`10:00:00`}>10:00am</option>
          <option value={`10:30:00`}>10:30am</option>
          <option value={`11:00:00`}>11:00am</option>
          <option value={`11:30:00`}>11:30am</option>
          <option value={`12:00:00`}>12:00pm</option>
          <option value={`12:30:00`}>12:30pm</option>
          <option value={`01:00:00`}>1:00pm</option>
          <option value={`01:30:00`}>1:30pm</option>
          <option value={`02:00:00`}>2:00pm</option>
          <option value={`02:30:00`}>2:30pm</option>
          <option value={`03:00:00`}>3:00pm</option>
          <option value={`03:30:00`}>3:30pm</option>
          <option value={`04:00:00`}>4:00pm</option>
          <option value={`04:30:00`}>4:30pm</option>
        </select>
      </div>
   
        <label>How Can We Help?</label>
        <br />
        <textarea
          type="text"
          placeholder="Diagnostics, oil change..."
          value={formState.workRequest}
          onChange={handleChange}
          name="workRequest"
        ></textarea> 
        <Dropdown
        year={year}
        model={model}
        handleModelChange={handleModelChange}
        handleYearChange={handleYearChange}
      />
      <button type='submit' onClick={handleSubmit}>Request Appointment</button>
      </form>
     
     
    </>
  );
}

export default withRoot(AppointmentForm)
