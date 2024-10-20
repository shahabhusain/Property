import Image from 'next/image'
import React from 'react'
import User from '../../../public/assets/User.png'
const UserProfile = () => {
  return (
    <div className=' w-full'>
        <h1 className=' text-[#AE8E50] text-[35px] font-[600]'>Profile</h1>
        <div className=' flex gap-11'>
            <div className=' w-1/2 flex flex-col gap-3'>
                <h1>General Information</h1>
                <Image src={User} alt='image' />
            </div>
            <form className=' w-full flex flex-col gap-3'>
                <div className=' flex flex-col gap-1'>
                    <label>Full Name</label>
                    <input className=' py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]' type="text" placeholder='Jhon Deo' />
                </div>

                <div className=' flex flex-col gap-1'>
                    <label>Country</label>
                     <select className='py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]'>
                        <option value="All Country">All Country</option>
                        <option value="UK">UK</option>
                        <option value="Dubai">Dubai</option>
                     </select>
                </div>

                <div className=' flex flex-col gap-1'>
                    <label>Location</label>
                    <input className=' py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]' type="text" placeholder='Location' />
                </div>

                <div className=' flex flex-col gap-1'>
                    <label>Email</label>
                    <input className=' py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]' type="text" placeholder='johndoe@gmail.com' />
                </div>
               
                <div className=' flex items-center  gap-2'>
                    <input className=' py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]' type="checkbox" placeholder='johndoe@gmail.com' />
                    <label>Make this my default address</label>
                </div>


                <button className=' bg-[#AE8E50] py-2 px-5 rounded-md text-white w-fit'>Save</button>



            </form>

            <form className=' w-full flex flex-col gap-3'>
                <div className=' flex flex-col gap-1'>
                    <label>Profession</label>
                    <input className=' py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]' type="text" placeholder='Real Estate' />
                </div>

                <div className=' flex flex-col gap-1'>
                    <label>Address</label>
                    <input className=' py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]' type="text" placeholder='UK' />
                </div>

                <div className=' flex flex-col gap-1'>
                    <label>Phone</label>
                    <input className=' py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]' type="text" placeholder='+1 (530) 555-12121' />
                </div>

                <div className=' flex flex-col gap-1'>
                    <label>Website</label>
                    <input className=' py-2 px-3 rounded-md border-[#E0E6ED] border-[1px]' type="text" placeholder='Enter URL' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserProfile