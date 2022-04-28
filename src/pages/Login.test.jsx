const { render, screen } = require('@testing-library/react')
const { default: userEvent } = require('@testing-library/user-event')
const { default: Login } = require('./Login')

describe('<Login />', () => {
  test('submitting the form call onSubmit with username and password', () => {

    let submittedData
    const handleSubmit = data => (submittedData = data)

    render(<Login onSubmit={handleSubmit} />);

    const username = 'chucknorris'
    const password = 'i need no password'

    userEvent.type(screen.getByLabelText(/username/i), username);
    userEvent.type(screen.getByLabelText(/password/i), password);
    userEvent.click(screen.getByRole('button', { name: /submit/i }))

    expect(submittedData).toEqual({
      username,
      password
    })
    
  })
})