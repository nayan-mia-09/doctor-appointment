import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {

    const {aToken} = useContext(AdminContext)
  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul className='text-[#515151]'>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-pink-400' : ''}`} to='/admin-dashboard'>
                <img src={assets.home_icon}/>
                <p>Dashboard</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-pink-400' : ''}`} to='/all-appointments'>
                <img src={assets.appointment_icon}/>
                <p>Appointments</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-pink-400' : ''}`} to='/add-doctor'>
                <img src={assets.add_icon}/>
                <p>Add Doctor</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-pink-400' : ''}`} to='/doctor-list'>
                <img src={assets.people_icon}/>
                <p>Doctors List</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default SideBar
