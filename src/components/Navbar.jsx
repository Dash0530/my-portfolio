import React, { useState } from 'react'
import Icon from '../assets/light.png'
import Ham from '../assets/Hamburger.png'
import Close from '../assets/close.svg'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=>setToggle(!toggle)

  return (
    <div className='w-full h-[68px] border-b flex items-center self-stretch justify-between'>
        <div className='w-[1280px] h-[36px] m-auto flex justify-between items-center px-8'>

            <p className='text-gray-900 items-center font-bold leading-9 tracking-tighter'>
              &lt;SS /&gt;
            </p>
            <div className='hidden md:flex items-center gap-x-6'>
                <ul className='flex gap-x-6 text-gray-600'>
                    <li>About</li>
                    <li>Work</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                    <div className='h-6 w-px bg-gray-100'>
                    </div>
                </ul>
                <div className='flex justify-center items-center gap-x-4'>
                    <button className='px-1.5 py-1.5'>
                      <img src={Icon} className='h-[24px] w-[24px]' />
                    </button>
                    <button className='bg-gray-900 rounded-xl'>
                      <p className='font-Inter text-xs text-gray-50 gap-x-4 font-medium py-1.5 px-4'>
                        Download CV</p>
                    </button>
                </div>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                  <img src={toggle?Close:Ham} alt="" />
            </div>
        </div>

        <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8':'hidden flex-col items-start'}>
          <ul className='flex flex-col self-stretch items-start justify-center'>
              <li className='p-4'>About</li>
              <li className='p-4'>Work</li>
              <li className='p-4'>Testimonials</li>
              <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar