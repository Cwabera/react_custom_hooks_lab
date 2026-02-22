import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [description, setDescription] = useLocalStorage("description", "");

  return (
    <div>
      <h1>Repair Request Form</h1>
      <form>
        <label>Name:</label>
        <input
          name="name"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          name="email"
          data-testid="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Description:</label>
        <input
          name="description"
          data-testid="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;