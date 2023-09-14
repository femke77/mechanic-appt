import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARS } from "./utils/queries";

export default function Dropdown() {

  const { data, loading, error } = useQuery(QUERY_CARS);
  const [model, setModel] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (data) {
      const uniqueModels = data.getCars.reduce((accumulator, car) => {
        const { model, year } = car;

        if (!accumulator[model]) {
          accumulator[model] = [year];
        } else {
          accumulator[model].push(year);
        }
        return accumulator;
      }, {});

      setUniqueModels(uniqueModels);
      setModel(Object.keys(uniqueModels));
    }
  }, [data]);

  const handleModelChange = (e) => {
    setSelectedYear("")
    setSelectedModel(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const modelYears = uniqueModels[selectedModel] || [];

  if (loading) return <p>Loading...</p>;
  
  if (error) {
    setErrorMessage("😞 An error has occured.");
    console.log(error.message);
  }

  return (
    <>
      <label htmlFor="modelDropdown">Select a Model: </label>
      <select
        id="modelDropdown"
        value={selectedModel}
        onChange={handleModelChange}
      >
        <option value=""> Model</option>
        {model.map((make, index) => (
          <option key={index} value={make}>
            {make}
          </option>
        ))}
      </select>
      <div>
        <label htmlFor="yearDropdown">Select a Year: </label>
        <select
          id="yearDropdown"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value=""> Year</option>
          {modelYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </>
  );
}