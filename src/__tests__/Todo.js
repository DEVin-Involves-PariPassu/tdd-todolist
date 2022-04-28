import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from '../components/Todo'

describe('<Todo />', () => {
  it('should be able to add new todo', () => {
    render(<Todo />)

    const input = screen.getByPlaceholderText(/compras/i)
    const form = screen.getByRole('form')

    userEvent.type(input, 'Fazer minhas tarefas de casa');
    fireEvent.submit(form);
    
    expect(screen.getByTestId('Fazer minhas tarefas de casa')).toBeInTheDocument()
    
  })

  it('should be able to list three todo', () => {
    render(<Todo />)

    const input = screen.getByPlaceholderText(/compras/i)
    const form = screen.getByRole('form')

    fireEvent.change(input, { target: { value: 'Café'}});
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: 'Leite'}});
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: 'Cerveja'}});
    fireEvent.submit(form);

    const todoList = screen.getByTestId("ul-todos")

    const listaItems = screen.getAllByRole('listitem');

    // eslint-disable-next-line testing-library/no-node-access
    expect(todoList.children.length).toBe(3);
    
    // Forma mais adequada
    expect(listaItems.length).toBe(3);
  })

  it('should be able to delete one todo', () => {
    render(<Todo />);

    const input = screen.getByPlaceholderText(/compras/i)
    const form = screen.getByRole('form')

    userEvent.type(input, 'Cerveja');
    fireEvent.submit(form);

    expect(screen.getByTestId('Cerveja')).toBeTruthy()

    const buttonDelete = screen.getByTestId('Cerveja-btn-delete')
    userEvent.click(buttonDelete)

    expect(screen.queryByTestId('Cerveja')).toBeNull()
  })
})