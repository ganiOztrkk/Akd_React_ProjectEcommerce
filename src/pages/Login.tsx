import React, {useState, FormEvent } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")

//fnc Login
const fcnLogin = (evt: FormEvent) => {
  evt.preventDefault()
  console.log(email, password, "deneme")
  
}

  return (
    <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-4 col-xxl-4'></div>

        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4'>
          <form onSubmit={fcnLogin}>
            <h2>Admin Login</h2>
            <div  className='mb-3 mt-3'>
              <input onChange={(evt) => setEmail(evt.target.value)} type='email' className='form-control' placeholder='E-Mail'/>
            </div>
            <div  className='mb-3 mt-3'>
              <input onChange={(evt) => setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password'/>
            </div>
            <button className='btn btn-primary mt-2 mb-2'>Login</button>
          </form>    
        </div>

        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-4 col-xxl-4'></div>
    </div>
  )
}
export default Login