import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const MyAppointment = () => {
  const {backendUrl, token} = useContext(AppContext)

  const [appointments, setAppointments] = useState([])

  const getUserAppointments = async () =>{
    try {
      const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers:{token}})

      if(data.success){
        setAppointments(data.appointments.reverse())
        console.log(data.appointments)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{

    if(token){
      getUserAppointments()
    }
  },[token])
  return (
    <div className='p-4'>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b text-lg sm:text-xl'>My appointments</p>
      <div>
        {
          appointments.map((item, index)=>(
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 py-4 border-b" key={index}>
              <div>
                <img className='w-32 bg-pink-200' src={item.docData.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold '>{item.docData.name}</p>
                <p>{item.docData.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.docData.address.line1}</p>
                <p className='text-xs'>{item.docData.address.line2}</p>
                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>{item.slotDate} |{item.slotTime}</p>
              </div>
              <div>

              </div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-pink-200 hover:text-black transition-all duration-300 cursor-pointer'>Pay Online</button>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer'>Cancel appointment</button>
              </div>

            </div>
          ))
        }

      </div>
    </div>
  )
}

export default MyAppointment
