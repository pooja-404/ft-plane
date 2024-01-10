import React, { useState } from 'react'
import york from '../assets/images/png/york.png'
import line from '../assets/images/svg/line.svg'


const Features = () => {
    const [modal, setmodal] = useState(false);
    function show() {
        setmodal(!modal);
    }
    return (
        <>
            <div>
                <div className="max-w-[1140px] px-3 mx-auto py-7">
                    <div className='flex flex-wrap flex-row py-5 '>
                        <div className=' lg:w-2/4  w-full px-3' data-aos="fade-down-right">
                            <img src={york} alt="letsfly" className='w-full' />
                        </div>
                        <div className=' lg:w-2/4  w-full px-3 pt-5' data-aos="fade-down-left">
                            <h1 className='text-[#313EF7] font-Monstserrat text-xl font-black relative after:w-9/12 after:absolute after:top-3.5 after:left-24 after:border-[#E5E7EB] after:h-[2px] after:border-dashed after:border-t-[3px]'>Let’s Fly</h1>
                            <h2 className='text-[#030303] font-Monstserrat sm:text-[32px] text-[28px] font-bold pt-2 leading-[45px]'>It’s one of the leading online flight booking platforms in the world</h2>
                            <div className='relative z-20'>
                                <div className='flex items-center gap-3 pt-8'>
                                    <div className='w-2.5 h-2.5 bg-[#313EF7] rounded-full p-[4px] z-10'></div>
                                    <p className='text-[#030303] font-Monstserrat text-[16px] font-medium'>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                                </div>
                                <div className='flex items-center gap-3 pt-3'>
                                    <div className='w-2.5 h-2.5 bg-[#313EF7] rounded-full p-[4px] z-10'></div>
                                    <p className='text-[#030303] font-Monstserrat text-[16px] font-medium'>If you are going to use a passage of Lorem Ipsum</p>
                                </div>
                                <div className='flex gap-3 pt-3'>
                                    <div className='pt-2'>
                                        <div className='w-2.5 h-2.5 bg-[#313EF7] rounded-full p-[2px] z-10'></div>
                                    </div>
                                    <p className='text-[#030303] font-Monstserrat text-[16px] font-medium'>Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                                <div className='flex gap-3 pt-3'>
                                    <div className='pt-2'>
                                        <div className='w-2.5 h-2.5 bg-[#313EF7] rounded-full p-[2px] z-10'></div>
                                    </div>
                                    <p className='text-[#030303] font-Monstserrat text-base font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className=' absolute left-[4px] bottom-[15%] -z-[1]'>
                                    <img src={line} alt="letsfly" className='sm:block hidden'/>
                                </div>
                                <div>
                                    {modal ? (<div className='h-[200px] w-[200px] rounded-3xl bg-[#030522] border-white border-solid flex justify-center items-center flex-col mt-2'>
                                        <p className='text-white font-Montserrat text-2xl font-bold text-center'>This is my modal</p>
                                        <button className='px-5 py-2 bg-white text-[#030522] font-Montserrat text-2xl font-semibold rounded-[10px] mt-2' onClick={show}>close</button>
                                    </div>) : (<div></div>)}
                                </div>
                                <div className=' after:w-[2px] after:absolute after:top-3.5 after:left-24   after:h-20 after:border-dashed '></div>
                            </div>

                            <div className='flex items-center pt-5'>
                                <button className='text-white font-Monstserrat font-semibold text-[16px] rounded-[56px]  bg-[#313EF7] border-0 px-11 py-3.5 mt-3 shadow-[0px_10px_14px_0px_#313EF740] transition-all duration-[900]   hover:-translate-y-5  hover:bg-[#030522]' onClick={show}>Book Now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
