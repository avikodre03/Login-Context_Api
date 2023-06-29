import React, { useContext } from 'react'
import './NavBar.css'
import { mainContext } from '../../ContextApi/Context'
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
const {setisloggedIn,userName}= useContext(mainContext);
  return (
    <>
    
    <div className='Navbar'>
      <h2>React Context</h2>
      <a >Home</a>
      <a >Profile</a>
      <a >Product</a>
      <a >Support</a>

      <button
        onClick={() => {
          setisloggedIn(false)
        }}>Logout</button>
        <p><FaUserCircle/><span>{userName}</span></p>
    </div>
    </>
  )
}

export default NavBar