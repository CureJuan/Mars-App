import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Centered from "../Centered/Centered";
import { FiCameraOff } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import TotalsPhotos from "../Totals";
import "./styles.css";
import { useState } from "react";

const Photos = ({ photos, handleSavePhoto }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const photosArr = Object.values(photos);

  if (photosArr == 0) {
    return (
      <Centered>
        <FiCameraOff />
        <div>No hay fotos, busque otra camara</div>
      </Centered>
    );
  }
  return (
    <>
      <AiOutlineStar
        className="favoritos"
        onClick={handleSavePhoto}
        value="Agregar Foto"
        data-toggle="tooltip"
        data-placement="left"
        title="Agregar a Favoritos"
        disabled={isDisabled && "disabled"}
      />
      <Row>
        {photosArr.map((Arr) =>
          Arr.map((photo) => (
            <Col md={4} sm={10} className="separation">
              <Card className="card__color" key={photo.id}>
                <Card.Body>
                  <AiOutlineStar
                    className="favoritos"
                    onClick={""}
                    value="Agregar Foto"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Agregar a Favoritos"
                    disabled={isDisabled && "disabled"}
                  />
                  <Card.Title className="card-title__color">
                    <b>Foto N°:</b> {photo.id}
                  </Card.Title>
                  <b>Fecha terrestre:</b> {photo.earth_date}
                  <br />
                  <b>Fecha solar:</b> {photo.sol}
                  <Card.Img
                    variant="top"
                    className="img"
                    src={photo.img_src}
                    width="300"
                    height="250"
                  />
                  <b>Lanzado: </b>
                  {photo.rover.launch_date}
                  <br />
                  <b>Aterrizaje: </b>
                  {photo.rover.landing_date}
                  <br />
                  <b>Estado: </b>
                  {photo.rover.status}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <TotalsPhotos total={photos.photos.length} />
    </>
  );
};
export default Photos;
