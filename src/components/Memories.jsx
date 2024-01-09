import React from 'react'
import paris1 from '../assets/images/png/paris1.png'
import paris2 from '../assets/images/png/paris2.png'
import paris3 from '../assets/images/png/paris3.png'
import paris4 from '../assets/images/png/paris4.png'


function Memories() {
    return (
        <div className='py-24'>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <h2 className='text-[#011736] font-Montserrat font-bold  sm:text-[40px] text-[36px] text-center'>Make memories with us</h2>
                <div className='flex flex-wrap flex-row justify-center pt-8'>
                    <div className='sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3' data-aos="flip-left">
                        <img src={paris1} alt="paris" className='w-full' />
                    </div>
                    <div className='sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 lg:pt-[36px]' data-aos="flip-right">
                        <img src={paris2} alt="paris" className=' w-full' />
                    </div>
                    <div className='sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3' data-aos="flip-left">
                        <img src={paris3} alt="paris" className='w-full' />
                    </div>
                    <div className='sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 lg:pt-[36px]' data-aos="flip-right">
                        <img src={paris4} alt="paris" className=' w-full' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Memories
