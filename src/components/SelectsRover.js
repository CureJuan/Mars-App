import React, { useState } from "react";
import SelectsList from "./SelectsList";

const URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

const api_key = "twqPmUgVMDyD4mqoa0pTpwSlSJDPIaQcTF8RFZfg";

const SelectsAnidados = () => {
  const [rover, setRover] = useState("curiosity");
  const [sol, setSol] = useState("1000");
  const [camera, setCamera] = useState("fhaz");

  return (
    <div className="App-header">
      <h2>API NASA</h2>
      <h3>Fotos de Marte</h3>

      <SelectsListRover
        title="rover"
        url={`${URL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${api_key}`}
        handleChange={(e) => {
          setRover(e.target.value);
        }}
      />

      {rover && (
        <SelectsList
          title="sol"
          url={`${URL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${api_key}`}
          handleChange={(e) => {
            setSol(e.target.value);
          }}
        />
      )}
      {sol && (
        <SelectsList
          title="camera"
          url={`${URL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${api_key}`}
          handleChange={(e) => {
            setCamera(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default SelectsAnidados;
