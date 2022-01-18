import './index.css'

function TodoItem(props) {
  const {deleteUser, eachTodo} = props
  const {title, id: uniqueId} = eachTodo

  const onDeleteClick = () => {
    deleteUser(uniqueId)
  }

  return (
    <li className="todo-list">
      <p className="todo-title">{title}</p>
      <button className="btn" type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
