import { useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [category, setCategory] = useState("All")
  const [cart, setCart] = useState([])

  // 🔥 THIS IS WHAT THE TEST NEEDS
  const [name, setName] = useLocalStorage("name", "")

  const items = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Bread", category: "Bakery" },
    { id: 3, name: "Apple", category: "Produce" },
    { id: 4, name: "Cheese", category: "Dairy" }
  ]

  const filteredItems =
    category === "All"
      ? items
      : items.filter(item => item.category === category)

  const handleAddToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping List</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>

      {/* 🔥 THIS INPUT IS REQUIRED FOR THE TEST */}
      <input
        data-testid="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Produce">Produce</option>
      </select>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} ({item.category})
            <button onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App