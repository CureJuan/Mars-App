import { useFetch } from "../hooks/useFetch";
import Message from "./Message";

const SelectsListRover = ({ title, url, handleChange }) => {
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
    <div className="select">
      <label htmlFor={id}>Selecciona un {title}</label>
      <select
        className="form-select"
        aria-label="Default select example"
        name={id}
        id={id}
        onChange={handleChange}
      >
        <option value="curiosity">Curiosity</option>
        <option value="spirit">Spirit</option>
        <option value="opportunity">Opportunity</option>
      </select>
    </div>
  );
};

export default SelectsListRover;
