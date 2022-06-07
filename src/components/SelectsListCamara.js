import { useFetch } from "../hooks/useFetch";
import Message from "./Message";

const SelectsListCamara = ({ title, url, handleChange }) => {
  const { data, error } = useFetch(url);

  if (!data) return null;
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}:${error.status.Text}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  return (
    <>
      <div className="select">
        <label htmlFor={id}>Selecciona la {title}</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name={id}
          id={id}
          onChange={handleChange}
        >
          <option value="fhaz">Front Hazard Avoidance Camera</option>
          <option value="rhaz">Rear Hazard Avoidance Camera</option>
          <option value="mast">Mast Camera</option>
          <option value="chemcam">Chemistry and Camera Complex</option>
          <option value="mahli">Mars Hand Lens Imager</option>
          <option value="mardi">Mars Descent Imager</option>
          <option value="navcam">Navigation Camera</option>
          <option value="pancam">Panoramic Camera</option>
          <option value="minites">
            Miniature Thermal Emission Spectrometer (Mini-TES)
          </option>
        </select>
      </div>
    </>
  );
};
export default SelectsListCamara;
