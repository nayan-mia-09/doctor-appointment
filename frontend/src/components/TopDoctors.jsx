

import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const TopDoctors = () => {

  const navigate = useNavigate()
  const {doctors} =useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-auto px-4 sm:px-6 md:px-10 lg:px-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium text-center'>Top Doctors to Book</h1>
      <p className='text-sm sm:text-base sm:w-2/3 md:w-1/2 text-center text-gray-600'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 pt-5 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item, index)=>(
            <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} key={index} className='border border-pink-200 rounded-xl overflow-hidden cursor-pointer hover:translate-2.5 transition-all duration-500'>
                <img className='bg-pink-50 w-full' src={item.image} alt="" />
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                         <span className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-black'} rounded-full`}></span><p>Available</p>
                    </div>
                </div>
                <p className='text-gray-900 text-lg font-medium ms-4'>{item.name}</p>
                <p className='text-gray-600 text-sm ms-4 mb-4'>{item.speciality}</p>
            </div>
            
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0) }} className='bg-pink-300 text-gray-700 px-12 py-3 rounded-full  mt-10 cursor-pointer'>more</button>
    </div>
  )
}

export default TopDoctors
