import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const NavBar = () => {
    const {aToken, setAToken} = useContext(AdminContext)
    const logout = () =>{
        aToken && setAToken ('')
        aToken && localStorage.removeItem('aToken')

    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center text-xs gap-2'>
        <div>
            <p className='text-3xl text-pink-500 font-bold cursor-pointer'>PulseCare</p>
            <p className='text-xl text-pink-500'>Dashboard</p>

        </div>
        
        <p className='border px-2.5 py-0.5 rounded-full border-pink-300 text-black'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-pink-400 text-white text-sm px-10 py-2 rounded-full cursor-pointer'>Logout</button>
    </div>
  )
}

export default NavBar
