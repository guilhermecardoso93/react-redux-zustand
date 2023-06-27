import { useSelector } from "react-redux"

export function TodoList() {
  const store = useSelector(store => store)
  
  return (
    <ul>
      <li>Fazer Café</li>
      <li>Estudar</li>
    </ul>
  )
}