import React, { useEffect, useState } from 'react'
import { IUser } from '../models/IUser'

function Dashboard() {
    const [item, setItem] = useState<IUser>()
    useEffect( () => {
    const stData = localStorage.getItem("user")
        if(stData !== null){
            const jsonObj = JSON.parse(stData) as IUser
            setItem(jsonObj)
        }
    }, [])
  return (
    <>
    <div>
        <h1>{item?.name}</h1>
        <h1>{item?.phone}</h1>
        <h1>{item?.email}</h1>
    </div>
    </>
  )
}
export default Dashboard