import { DeleteBtn } from './DeleteBtn'

export function TodoItem({
  title,
  completed,
  id,
  key,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li key={key}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <DeleteBtn deleteTodo={deleteTodo} id={id} />
    </li>
  )
}
