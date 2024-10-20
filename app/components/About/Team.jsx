import Image from 'next/image'
import React from 'react'
import team from '../../../public/assets/team.png'
import team1 from '../../../public/assets/team1.png'
import team2 from '../../../public/assets/team2.png'
const Team = () => {
  return (
    <div className=' w-[90%] mx-auto flex items-center justify-between mt-32'>
        <div className=' relative'>
            <Image  src={team} alt='image' />
            <div className=' absolute top-72 left-4 bg-black py-8 rounded-md px-32 items-center flex flex-col gap-2 '>
                <h1 className=' text-white text-[20px] font-[600]'>Zaire Dias</h1>
                <p className=' text-white text-[14px] font-[300]'>Managing Director
                </p>
            </div>
        </div>

        <div className=' relative'>
            <Image  src={team1} alt='image' />
            <div className=' absolute top-72 left-4 bg-black py-8 rounded-md px-32 items-center flex flex-col gap-2 '>
                <h1 className=' text-white text-[20px] font-[600]'>Zaire Dias</h1>
                <p className=' text-white text-[14px] font-[300]'>Managing Director
                </p>
            </div>
        </div>

        <div className=' relative'>
            <Image  src={team2} alt='image' />
            <div className=' absolute top-72 left-4 bg-black py-8 rounded-md px-32 items-center flex flex-col gap-2 '>
                <h1 className=' text-white text-[20px] font-[600]'>Zaire Dias</h1>
                <p className=' text-white text-[14px] font-[300]'>Managing Director
                </p>
            </div>
        </div>
    </div>
  )
}

export default Team