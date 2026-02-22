function Form({ setFilter }) {
  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <select onChange={handleChange}>
      <option value="All">All</option>
      <option value="Dairy">Dairy</option>
      <option value="Bakery">Bakery</option>
      <option value="Produce">Produce</option>
    </select>
  )
}

export default Form