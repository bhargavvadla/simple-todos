import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    userTodoList: initialTodosList,
  }

  deleteTodo = uniqueId => {
    const {userTodoList} = this.state
    const updatedTodoList = userTodoList.filter(
      eachItem => eachItem.id !== uniqueId,
    )
    console.log(userTodoList)
    this.setState({userTodoList: updatedTodoList})
  }

  render() {
    const {userTodoList} = this.state
    return (
      <div className="app-container">
        <div className="todo-container">
          <h1 className="todo-heading">Simple Todos</h1>
          <ul className="todo-items-container">
            {userTodoList.map(eachTodoItem => (
              <TodoItem
                eachTodo={eachTodoItem}
                key={eachTodoItem.id}
                deleteUser={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
