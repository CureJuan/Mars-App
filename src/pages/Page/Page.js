import "../../App.css";
import { Link } from "react-router-dom";
import styles from "../../NavBar.module.css";
import logo from "../../image/logo.png";

function Page() {
  return (
    <div className="App">
      <div className={styles.navbar}>
        <div>
          <Link to="/inicio" className="btn ">
            <img src={logo} className="logo" alt="logo" width="70" />
            Inicio
          </Link>

          <Link to="/sol" className="btn">
            Ver fotos por fecha solar
          </Link>

          <Link to="/terrestre" className="btn">
            Ver fotos por fecha terrestre
          </Link>

          <Link to="/favorites" className="btn">
            Paginas Favoritas
          </Link>
          <Link to="/fotos" className="btn">
            Fotos Favoritas
          </Link>
          
          <Link to="/login" className="btn">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Page;
