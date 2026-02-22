import useLocalStorage from "./hooks/useLocalStorage";

function Form() {
  const [formData, setFormData] = useLocalStorage("repair-form", {
    name: "",
    email: "",
    issue: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form>
      <label>Name:</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <label>Email:</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <label>Issue:</label>
      <textarea
        name="issue"
        value={formData.issue}
        onChange={handleChange}
        placeholder="Describe the issue"
      />
    </form>
  );
}

export default Form;