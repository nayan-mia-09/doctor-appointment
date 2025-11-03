import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*left section*/}
            <div>
                 <h1 className='text-2xl font-bold cursor-pointer text-pink-500 mb-5'>PusleCare</h1>
                 <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            {/*center section*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            {/*right section*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>puslecare247@gmail.com</li>
                </ul>
                
            </div>
        </div>

        {/*Copyright text*/}
        <div>
            <hr className='text-pink-400' />
            <p className='py-5 text-sm text-center'>Copyright © 2025 PusleCare - All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
