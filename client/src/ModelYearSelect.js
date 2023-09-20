import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARS } from "./utils/queries";

export default function ModelYearSelect({model, year, handleModChange, handleYChange}) {

  const { data, loading, error } = useQuery(QUERY_CARS);
  const [models, setModels] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);
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
      setModels(Object.keys(uniqueModels).reverse());
    }
  }, [data]);

  const handleModelChange = (e) => {
    handleYChange("")
    handleModChange(e.target.value)
    
  };

  const modelYears = uniqueModels[model] || [];

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
        value={model}
        onChange={handleModelChange}
      >
        <option value=""> Model</option>
        {models.map((make, index) => (
          <option key={index} value={make}>
            {make}
          </option>
        ))}
      </select>
      <div>
        <label htmlFor="yearDropdown">Select a Year: </label>
        <select
          id="yearDropdown"
          value={year}
          onChange={(e)=>handleYChange(e.target.value)}
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


