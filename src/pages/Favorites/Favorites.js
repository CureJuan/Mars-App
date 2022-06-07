import "../../App.css";
import Footer from "../../components/Footer/Footer";
import styles from "./fondo.module.css";
import Page from "../../pages/Page/Page";
import PhotoTableFav from "./PhotoTableFav";
import { BsTrash } from "react-icons/bs";


const Favorites = () => {
  let myPhotos = JSON.parse(localStorage.getItem("myPhotos")) || [];

  function Limpiar() {
    alert("Deseas Borrar los Favoritos?");
    localStorage.clear();
  };

  return (
    <div className="App">
      <Page />
      <div className={styles["fondo"]}>
        <div className={styles["title"]}>
          <h1>Favoritos</h1>
           <BsTrash
            className="limpiar"
            data-toggle="tooltip"
            data-placement="rigth"
            title="Vaciar Favoritos"
            onClick={() => Limpiar()}
          />
        </div>
          <div className={styles["tabla"]}>
            <PhotoTableFav myPhotos={myPhotos} />
          </div>
          <Footer />
      </div>
    </div>
  );
};

export default Favorites;
