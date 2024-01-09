import React from 'react'
import travel1 from "../assets/images/png/travel1.png";
import travel2 from "../assets/images/png/travel2.png";
import travel3 from "../assets/images/png/travel3.png";
import travel4 from "../assets/images/png/travel4.png";
import small1 from "../assets/images/png/small1.png";
import small2 from "../assets/images/png/small2.png";
import small3 from "../assets/images/png/small3.png";
import small4 from "../assets/images/png/small4.png";

const Travel = () => {
    return (
        <div>
            <div className="max-w-[1140px] px-3 mx-auto">
                <h2 className='text-[#011736] font-montserrat sm:text-[40px] text-[36px] tracking-[0.6px] pb-[40px] font-bold leading-[150%] capitalize text-center pt-[50px]'>Best travelars of this month</h2>
                <div className="flex flex-row flex-wrap -mx-3 justify-center">
                    <div className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center" data-aos="flip-left">
                        <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
                            <img className='w-full' src={travel1} alt="big-img1" />
                            <img className=' absolute top-[52%]' src={small1} alt="short1" />
                            <p className='text-[#011736] text-center pt-[68px] text-[24px] font-Montserrat font-semibold leading-[150%] self-stretch'>Raju Mullah</p>
                            <p className='text-[#979797] pb-[40px] font-Montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]'>@rajumulllah</p>
                        </div>
                    </div>
                    <div className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center"data-aos="flip-right">
                        <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
                            <img className='w-full' src={travel2} alt="big-img1" />
                            <img className=' absolute top-[52%]' src={small2} alt="short1" />
                            <p className='text-[#011736] text-center pt-[68px] text-[24px] font-Montserrat font-semibold leading-[150%] self-stretch'>Zaire Vetrovs</p>
                            <p className='text-[#979797] pb-[40px] font-Montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]'>@zairevetrovs</p>
                        </div>
                    </div>
                    <div className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center" data-aos="flip-left">
                        <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
                            <img className='w-full' src={travel3} alt="big-img1" />
                            <img className=' absolute top-[52%]' src={small3} alt="short1" />
                            <p className='text-[#011736] text-center pt-[68px] text-[24px] font-Montserrat font-semibold leading-[150%] self-stretch'>Marcus Dias</p>
                            <p className='text-[#979797] pb-[40px] font-Montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]'>@marcusdias</p>
                        </div>
                    </div>
                    <div className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center"data-aos="flip-right">
                        <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
                            <img className='w-full' src={travel4} alt="big-img1" />
                            <img className=' absolute top-[52%]' src={small4} alt="short1" />
                            <p className='text-[#011736] text-center pt-[68px] text-[24px] font-Montserrat font-semibold leading-[150%] self-stretch'>Davis Schleifer</p>
                            <p className='text-[#979797] pb-[40px] font-Montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]'>@davisschleifer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel