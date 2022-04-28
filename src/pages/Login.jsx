const Login = ({ onSubmit }) => {

  const handleSubmit = e => {
    e.preventDefault();

    const {username, password} = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username-field'>Username</label>
        <input type="text" name="username" id="username-field"/>
      </div>
      <div>
        <label htmlFor='password-field'>Password</label>
        <input type="password" name="password" id="password-field"/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Login