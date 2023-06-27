export function DeleteBtn({deleteTodo,id}) {
  return (
    <button onClick={() => deleteTodo(id)} className="btn btn-danger">
      Delete
    </button>
  )
}
