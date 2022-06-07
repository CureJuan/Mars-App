
import styles from "./total.module.css";

const TotalsPhotos = ({ total }) => {
  
  return (
    <div className={styles["total"]}>
      Total de Fotos : {total}
    </div>
  );
};
export default TotalsPhotos;
