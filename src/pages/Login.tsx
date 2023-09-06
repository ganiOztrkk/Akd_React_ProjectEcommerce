import React, {useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { encrypt } from '../util'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState('')

//fnc Login
const fcnLogin = (evt: FormEvent) => {
  evt.preventDefault()
  if(email === "gani@gmail.com" && password ==="12345"){
    //geçici yani tarayıcı acık oldugu sürece yaşayan data - session storage
    //birinci parametre - key , ikinci parametre - value
    const item ={
      email: email,
      name: "Ali Bilmem",
      phone: "543 230 2300"
    }
    var stItem = JSON.stringify(item)
    stItem = encrypt(stItem)
    
    localStorage.setItem("user", stItem)
    navigate('/dashboard')
    //sessionStorage.setItem("user",email)
  }
  else{
    setErrorMessage("Kullanıcı adı yada şifre hatalı.")
  }

}

  return (
    <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-4 col-xxl-4'></div>

        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4'>
          <form onSubmit={fcnLogin}>
            <h2>Admin Login</h2>
            {errorMessage !== "" &&
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Dikkat!</strong> {errorMessage}
              <button type="button" className="btn-close" onClick={() => setErrorMessage('')}></button>
            </div>
            }
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