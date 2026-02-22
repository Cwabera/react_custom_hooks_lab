import { useId } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  const id = useId();

  const [formData, setFormData] = useLocalStorage("repair-form", {
    name: "",
    email: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form>
      <label htmlFor={`${id}-name`}>Name:</label>
      <input
        id={`${id}-name`}
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor={`${id}-email`}>Email:</label>
      <input
        id={`${id}-email`}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor={`${id}-description`}>Description:</label>
      <input
        id={`${id}-description`}
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;