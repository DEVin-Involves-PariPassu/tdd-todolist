import { useState } from 'react'

const Todo = () => {

  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if(!todoItem || todoList.includes(todoItem)) return;

    setTodoList([...todoList, todoItem])
    setTodoItem('')
  }

  const handleDelete = item => {
    setTodoList(todoList.filter(todoItem => todoItem !== item));
  }

  return (
    <>
      <form onSubmit={handleSubmit} aria-label="Formulário Todo">
        <input
          type="text"
          placeholder='Fazer compras'
          value={todoItem}
          onChange={e => setTodoItem(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>

      <h2>Lista de Tarefas</h2>
      <ul data-testid="ul-todos">
        {todoList.map(todoItem => (
          <li key={todoItem} data-testid={todoItem}>
            {todoItem} {" "}
            <button type="button" data-testid={`${todoItem}-btn-delete`}
              onClick={() => handleDelete(todoItem)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo