import { useState } from "react"

const Login = () => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('')
  return (
    <>
    <form onSubmit={(e)=> e.preventDefault()}>
      <h2 className="text-xl">Login now!</h2>
      <label htmlFor="email">Email</label><br />
      <input type="email"
       name="email" 
       className="border"
       id="email" 
       placeholder="example@gmail.com" 
       value={email} 
       onChange={(e)=> {setEmail(e.target.value);}} 
       required/><br />
      <label htmlFor="password">Password</label><br />
      <input 
      type="password" 
      name="password" 
      className="border"
      id="password" 
      placeholder="2xample@123"
      value={password}
      onChange={(e) => {setPassword(e.target.value);}}
      required/><br />
      <input type="submit" value="submit" />
    </form>
    <a href="#">Forgot Password?</a>
    <p>You dont have an account? <a href="#">Sign up now!</a></p>
    </>
  )
}

export default Login
