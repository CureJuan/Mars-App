import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Page from "../pages/Page/Page";
import Banner from "../components/Banner";
import SelectsAnidados from "../components/SelectsAnidados";
import { useState } from "react";
import Favorites from "../pages/Favorites/Favorites";

const Rutas = (handleDeletePhoto) => {
  const [select, setSelect] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/page" exact element={<Page />} />
        <Route path="/" exact element={<Login />} />
        <Route exact path="/inicio" element={<Banner />}></Route>
        <Route
          exact
          path="/sol"
          element={
            <SelectsAnidados
              onChange={() => {
                setSelect(false);
              }}
              select={select}
            />
          }
        />
        <Route
          exact
          path="/terrestre"
          element={
            <SelectsAnidados
              onChange={() => {
                setSelect(true);
              }}
            />
          }
        />
        <Route
          exact
          path="/favorites"
          element={<Favorites handleDeletePhoto={handleDeletePhoto} />}
        />
      </Routes>
    </Router>
  );
};
export default Rutas;
