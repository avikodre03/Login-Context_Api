import React, { useContext, useState } from 'react'
import './LoginPage.css'
import { mainContext } from '../../ContextApi/Context'

const LoginPage = () => {
  const { setisloggedIn, setuserName } = useContext(mainContext)
  const [user, setuser] = useState(
    {
      name: "",
      password: ""
    }
  )
  const handleAuthentication = () => {
    if (user.name === "avinash" && user.password === "avi@123" ||
      user.name === "admin" && user.password === "admin@123") {
      setisloggedIn(true)
      setuserName(user.name)
    } else {
      alert("enter Proper Credential (username : admin & password : admin@123)")
    }
  }
  return (
    <>
      <div className='LoginPage'>
        <h2>Log in to Home </h2>

        <div className="userName">

          <input type="text" placeholder='UserName'
            onChange={(e) => {
              setuser({ ...user, name: e.target.value })
            }}
          />
        </div>
        <div className="password">
          <input type="password" placeholder='Password'
            onChange={(e) => {
              setuser({ ...user, password: e.target.value })
            }}
          />
        </div>
        <button onClick={handleAuthentication}>Log in</button>
        <p>forgotten  Password?</p>
      </div>
    </>
  )
}

export default LoginPage