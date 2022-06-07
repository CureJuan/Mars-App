import React from "react";
import PhotoTableRow from "./PhotoTableRow";

const PhotoTableFav = ({ myPhotos }) => {
  return (
    <div className="listado">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Pagina</th>
            <th>Camara</th>
            <th>Rover</th>
            <th>Fecha Terrestre</th>
            <th>Fecha Solar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {myPhotos.length > 0 ? (
            myPhotos.map((misFotos, index) => (
              <PhotoTableRow key={index} id={index} misFotos={misFotos} />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="vacio">Sin Paginas en Favoritos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PhotoTableFav;
