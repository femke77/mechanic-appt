import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARS } from "../../utils/Queries";

export default function ModelYearSelect({
  model,
  year,
  handleModelChange,
  handleYearChange,
}) {
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
      setModels(Object.keys(uniqueModels).slice().reverse());
    }
  }, [data]);

  const handleChange = (e) => {
    handleYearChange("");
    handleModelChange(e.target.value);
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
      <select id="modelDropdown" value={model} onChange={handleChange}>
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
          onChange={(e) => handleYearChange(e.target.value)}
        >
          <option value=""> Year</option>
          {modelYears
            .slice()
            .reverse()
            .map((year, index) => (
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
