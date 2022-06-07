import { useFetch } from "../hooks/useFetch";
import Message from "./Message";
import Photos from "./Photos/Photos";

const SelectsList = ({ title, url, handleChange, handleSavePhoto }) => {
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
        <label htmlFor={id}>Selecciona fecha {title}ar</label>
        <input
          className="form-select"
          onClick={handleChange}
          type="input"
          min="0"
          max="3000"
        />
      </div>
      <Photos photos={data} handleSavePhoto={handleSavePhoto} />
    </>
  );
};

export default SelectsList;
