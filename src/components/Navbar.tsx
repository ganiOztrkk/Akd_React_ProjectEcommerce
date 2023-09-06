import React, { useEffect, useState } from 'react'
import { IUser } from '../models/IUser'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

  const [item, setItem] = useState<IUser>()
    const navigate = useNavigate()
    useEffect( () => {
    const stData = localStorage.getItem("user")
        if(stData !== null){
            const jsonObj = JSON.parse(stData) as IUser
            setItem(jsonObj)
        }
        else{
          navigate('/')
        }
    }, [])

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">React App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/' className="nav-link">Anasayfa</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/profile' className="nav-link">Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='' className="nav-link disabled">{item?.name}</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar