import React from "react";
import { useNavigate } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
import "./fondo.module.css";
import { useState } from "react"
  
let myPhotosInit = JSON.parse(localStorage.getItem("myPhotos")) || [];

const PhotoTableRow = ({ id, misFotos }) => {
  let { sol, camera, terrestre, rover, page, api_key, URL } = misFotos;
  
  const [myPhotos, setMyPhotos] = useState(myPhotosInit);

  let navigate = useNavigate();

  function handleDeletePhoto(id) {
    let isDelete = window.confirm(`Estas seguro de borrar el favorito ${id}`);
    if (isDelete) {
      let phot = myPhotos.filter((el, index) => index !== id);
      setMyPhotos(phot);
      localStorage.setItem("myPhotos", JSON.stringify(phot));
    }
  }

  return (
    <tr className="tabla2">
      <td>{id}</td>
      <td>{page}</td>
      <td>{camera}</td>
      <td>{rover}</td>
      <td>{terrestre}</td>
      <td>{sol}</td>
      <td>

        <button className="ver" onClick={() => navigate(`${URL}/${rover}/photos?earth_date=${terrestre}&camera=${camera}&page=${page}&api_key=${api_key}`)}>
          <ImEye />
        </button> 
        <button className="eliminar" data-toggle="tooltip"
            data-placement="rigth"
            title="Vaciar Favoritos"onClick={() => handleDeletePhoto(id)}>
          <BsTrash />
        </button>
     </td>
    </tr>
  );
};

export default PhotoTableRow;
