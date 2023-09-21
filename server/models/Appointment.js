const mongoose = require("mongoose");
const { Schema } = mongoose;
const dayjs = require('dayjs')
const apptSchema = new Schema(
  {
    // start and end look like this: 2023-09-12T07:00:00
    startDate: {
      type: Date,
      required: true,
      get: (ts) => dayjs(ts).format('MM/DD/YY hh:mma')
    },
    // for blocking out hours in the calendar, not sure how this will be handled yet
    endDate: {
      type: String,
    },
    // diagnostics, oil change, tire rotation, etc
    workRequest: {
      type: String,
      required: true,
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: "car",
      required: true,
    },
    notes: {
      type: String,
      default: "No notes yet. Check back soon."
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Appointment = mongoose.model("appointment", apptSchema);

module.exports = Appointment;
