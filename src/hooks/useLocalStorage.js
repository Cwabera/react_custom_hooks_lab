import { useState } from "react"

export function useLocalStorage(key, initialValue = null) {
  const storedValue = localStorage.getItem(key)

  const [value, setValue] = useState(
    storedValue !== null ? storedValue : initialValue
  )

  const setStoredValue = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, newValue)
  }

  return [value, setStoredValue]
}