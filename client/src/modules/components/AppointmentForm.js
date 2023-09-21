import { useState, useEffect } from "react";
import Dropdown from "./ModelYearSelect";
import { useMutation } from "@apollo/client";
import { ADD_APPT } from "../../utils/Mutations";
import withRoot from "../withRoot";
import AppAppBar from "../views/AppAppBar";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

function AppointmentForm() {
  const [addAppointment, { error }] = useMutation(ADD_APPT);

  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [formState, setFormState] = useState({
    startDate: `08:00:00`,
    workRequest: "",
  });

  const [formattedTimestamps, setFormattedTimestamps] = useState({
    start: "",
  });

  useEffect(() => {
    const { startDate } = formState;
    if (startDate && date) {
      const formattedStart = `${dayjs(date).format("YYYY-MM-DD")}T${startDate}`;

      setFormattedTimestamps({
        start: formattedStart,
      });
    }
  }, [formState, date]);

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
    e.preventDefault();
    try {
      const { data } = await addAppointment({
        variables: {
          startDate: formattedTimestamps.start,
          workRequest: formState.workRequest,
          model,
          year,
        },
      });
      console.log(data);
      window.location.assign("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return <h2>{error.message}</h2>;
  return (
    <>
      <AppAppBar />
      <form>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            minDate={dayjs().add(1, "day")}
            label="Date"
            value={dayjs(date)}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
        <br />

        <FormControl sx={{ minWidth: 120, my: 2 }} size="small">
          <InputLabel id="time-select">Time</InputLabel>
          <Select
            labelId="time-select"
            id="time-select"
            value={formState.startDate}
            label="Time"
            onChange={handleChange}
            name="startDate"
          >
            <MenuItem value={`08:00:00`}>8:00am</MenuItem>
            <MenuItem value={`08:30:00`}>8:30am</MenuItem>
            <MenuItem value={`09:00:00`}>9:00am</MenuItem>
            <MenuItem value={`09:30:00`}>9:30am</MenuItem>
            <MenuItem value={`10:00:00`}>10:00am</MenuItem>
            <MenuItem value={`10:30:00`}>10:30am</MenuItem>
            <MenuItem value={`11:00:00`}>11:00am</MenuItem>
            <MenuItem value={`12:00:00`}>12:00pm</MenuItem>
            <MenuItem value={`12:30:00`}>12:30pm</MenuItem>
            <MenuItem value={`13:00:00`}>1:00pm</MenuItem>
            <MenuItem value={`13:30:00`}>1:30pm</MenuItem>
            <MenuItem value={`14:00:00`}>2:00pm</MenuItem>
            <MenuItem value={`14:30:00`}>2:30pm</MenuItem>
            <MenuItem value={`15:00:00`}>3:00pm</MenuItem>
            <MenuItem value={`15:30:00`}>3:30pm</MenuItem>
            <MenuItem value={`16:00:00`}>4:00pm</MenuItem>
            <MenuItem value={`16:30:00`}>4:30pm</MenuItem>
          </Select>
        </FormControl>

        <br />
        <label>How Can We Help?</label>
        <br />
        <textarea
          type="text"
          placeholder="Diagnostics, oil change...  Describe your request or problem here."
          value={formState.workRequest}
          onChange={handleChange}
          name="workRequest"
          rows="6"
          cols="70"
        ></textarea>

        <br />
        <Dropdown
          year={year}
          model={model}
          handleModelChange={handleModelChange}
          handleYearChange={handleYearChange}
        />
        <Button sx={{ mt: 3 }} type="submit" onClick={handleSubmit}>
          Request Appointment
        </Button>
      </form>
    </>
  );
}

export default withRoot(AppointmentForm);
