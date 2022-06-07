import React, { useState, useEffect } from "react";
import SelectsList from "./SelectsList";
import SelectsListCamara from "./SelectsListCamara";
import SelectsListRover from "./SelectsListRover";
import SelectsListTerrestre from "./SelectsListTerrestre";
import Pagination from "./Pagination";
import Footer from "./Footer/Footer";
import Page from "../pages/Page/Page";

let myPhotosInit = JSON.parse(localStorage.getItem("myPhotos")) || [];

export const LIMITS = [5, 10, 25];

const URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";
// const URL2 = "https://api.nasa.gov/mars-photos/api/v1/manifests";

const api_key = "twqPmUgVMDyD4mqoa0pTpwSlSJDPIaQcTF8RFZfg";
//const api_key = "3g0ldYMl6Gwx7DilJf790AatThz0WVIcOrhSkjwT";

const SelectsAnidados = ({ select }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState();
  const [myPhotos, setMyPhotos] = useState(myPhotosInit);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const [rover, setRover] = useState("curiosity");
  const [sol, setSol] = useState("0");
  const [terrestre, SetTerrestre] = useState(`${date}`);
  const [camera, setCamera] = useState("fhaz");

  useEffect(() => {
    localStorage.setItem("myPhotos", JSON.stringify(myPhotos));
  }, [myPhotos]);

  const handleSavePhoto = () => {
    alert("Salvando foto");
    let currentPhoto = {
      rover,
      sol,
      terrestre,
      camera,
      page,
      api_key,
      URL,
    };

    let fotos = [...myPhotos, currentPhoto];
    setMyPhotos(fotos);
    localStorage.setItem("myPhotos", JSON.stringify(myPhotos)); //Guarda el localStorage
  };

  return (
    <div className="App">
      <Page />
      <SelectsListRover
        title="rover"
        url={`${URL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${api_key}`}
        handleChange={(e) => {
          setRover(e.target.value);
        }}
      />
      {rover && (
        <SelectsListCamara
          title="camera"
          url={`${URL}/${rover}/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=${api_key}`}
          handleChange={(e) => {
            setCamera(e.target.value);
          }}
        />
      )}
      {select && (
        <>
          <SelectsList
            title="sol"
            url={`${URL}/${rover}/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=${api_key}`}
            handleChange={(e) => {
              setSol(e.target.value);
            }}
            handleSavePhoto={handleSavePhoto}
          />
          <Pagination
            setPage={(page) => {
              window.scrollTo(0, 0);
              setPage(page);
            }}
            page={page}
            limit={limit}
            setLimit={(limit) => {
              window.scrollTo(0, 0);
              setLimit(limit);
            }}
          />
          <Footer />
        </>
      )}

      {!select && (
        <>
          <SelectsListTerrestre
            title="earth_date"
            url={`${URL}/${rover}/photos?earth_date=${terrestre}&camera=${camera}&page=${page}&api_key=${api_key}`}
            handleChange={(e) => {
              SetTerrestre(e.target.value);
            }}
            handleSavePhoto={handleSavePhoto}
          />
          <Pagination
            setPage={(page) => {
              window.scrollTo(0, 0);
              setPage(page);
            }}
            page={page}
            limit={limit}
            setLimit={(limit) => {
              window.scrollTo(0, 0);
              setLimit(limit);
            }}
          />
          <Footer />
        </>
      )}
    </div>
  );
};

export default SelectsAnidados;
