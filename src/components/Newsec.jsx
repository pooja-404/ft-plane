import React from 'react'

function Newsec() {
    return (
        <div className='bg-[#f5f5ff] pt-24 pb-20'>
            <div className='max-w-[1140px] px-3 mx-auto' data-aos="fade-up">
                <h2 className='text-[#011736] font-Montserrat font-bold sm:text-[40px] text-[32px] text-center max-w-[534px] mx-auto'>Subscribe Newsletter &  get letest news</h2>
                <div className='p-[11px_11px_11px_20px] bg-[#fff] rounded-[150px] shadow-[0px 100px 200px 0px #0117361A] mx-auto max-w-[493px] flex justify-between items-center mt-5  '>
                    <input type="text" placeholder='Enter your email address' className='text-[#AEB5BF] sm:text-xl font-Rubik font-normal text-[14px] outline-0' />
                    <button className='text-white font-Montserrat font-semibold text-[12px] sm:text-base rounded-[56px]  bg-[#313EF7] border-0 sm:p-[10px_25px_10px_25px] p-[10px_16px_10px_16px] transition-[all_.3s_ease_0s]  hover:scale-[80%] hover:bg-[#030522] '>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsec