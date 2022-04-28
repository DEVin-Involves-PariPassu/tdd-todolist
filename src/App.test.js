import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should be able to show the h1 element', () => {
    render(<App />)
    const element = screen.getByText(/bem vindo a lista de tarefas/i)
    
    expect(element).toBeInTheDocument();
  })
})
