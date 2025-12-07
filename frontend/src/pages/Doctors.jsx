import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const {speciality} = useParams();
  const {doctors} = useContext(AppContext)
  const navigate = useNavigate()

  const applyFilter = () =>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
   applyFilter()
  },[doctors,speciality])
  return (
    <div className='px-4 sm:px-6 md:px-10 lg:px-16'>
      <p className='text-gray-600 text-sm sm:text-base md:text-lg text-center sm:text-left'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 px-4 sm:px-6 md:px-10 lg:px-16'>
        <button  className={`py-2 px-4 border rounded text-sm font-medium sm:hidden w-full sm:w-auto ${showFilter ? 'bg-pink-400 text-white' : ''}`} onClick={()=>setShowFilter(prev => ! prev)}>Filters</button>
        <div className={`flex flex-col gap-3 sm:gap-4 text-sm text-gray-600 w-full sm:w-auto ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
         <p onClick={()=> speciality === 'General physician' ? navigate('/doctors'): navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-pink-300 rounded transition-all cursor-pointer ${speciality ==="General physician"?"bg-pink-200 text-black":""}`}>General physician</p>
        <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-pink-300 rounded transition-all cursor-pointer ${speciality ==="Gynecologist"?"bg-pink-200 text-black":""}`}>Gynecologist</p>
        <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-pink-300 rounded transition-all cursor-pointer ${speciality ==="Dermatologist"?"bg-pink-200 text-black":""}`}>Dermatologist</p>
        <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-pink-300 rounded transition-all cursor-pointer ${speciality ==="Pediatricians"?"bg-pink-200 text-black":""}`}>Pediatricians</p>
        <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-pink-300 rounded transition-all cursor-pointer ${speciality ==="Neurologist"?"bg-pink-200 text-black":""}`}>Neurologist</p>
        <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-pink-300 rounded transition-all cursor-pointer ${speciality ==="Gastroenterologist"?"bg-pink-200 text-black":""}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
        {
          filterDoc.map((item, index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-pink-200 rounded-xl overflow-hidden cursor-pointer hover:translate-2.5 transition-all duration-500'>
                <img className='bg-pink-50 w-full' src={item.image} alt="" />
                <div className='p-4'>
                    <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-600'} `}>
                         <span className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-600'} rounded-full`}></span><p>{item.available ? "Available": "Not Available"}</p>
                    </div>
                </div>
                <p className='text-gray-900 text-lg font-medium ms-4'>{item.name}</p>
                <p className='text-gray-600 text-sm ms-4 mb-4'>{item.speciality}</p>
            </div>
            
        ))

        }
      </div>
       
      </div>
      
      
    </div>
  )
}

export default Doctors
