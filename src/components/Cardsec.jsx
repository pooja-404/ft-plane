import React from "react";
import aero1 from "../assets/images/svg/aero1.svg";
import aero2 from "../assets/images/svg/aero2.svg";
import aero3 from "../assets/images/svg/aero3.svg";
import aero4 from "../assets/images/svg/aero4.svg";
import arrow from "../assets/images/svg/arrow.svg";
const processcard = [
    {
        svg: aero1,
        heading: "Best Guide",
        para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
        circle: arrow,
        animation: "flip-left"
    },
    {
        svg: aero2,
        heading: "More Discount",
        para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
        circle: arrow,
        botm: "lg:-translate-y-[30px]",
    },
    {
        svg: aero3,
        heading: "Private",
        para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
        circle: arrow,
        animation: "flip-left"
    },
    {
        svg: aero4,
        heading: "Online Support",
        para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
        circle: arrow,
        botm: "lg:-translate-y-[30px]",
        
    },
];

const Cardsec = () => {
    const list = processcard.map((processcard) => (
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full flex justify-center px-4 ">
            <div className={`rounded-[185px] max-w-[281.63px] bg-white py-[32px] px-[21px] shadow-[0px_100px_200px_0px_#0117361A] ${processcard.botm} flex justify-center flex-col items-center mt-5 mt-lg-0 hover:scale-x-110`}
                data-aos={`${processcard.animation}`}
                data-aos-duration="3000"
            >
                <div className="w-[70px] h-[70px] rounded-full bg-[#313EF70D] flex justify-center items-center">
                    {" "}
                    <img src={processcard.svg} alt="img-1" />
                </div>
                <div>
                    <p className=" text-center font-Montserrat text-2xl font-extrabold leading-[150%] pb-2.5 pt-4">
                        {processcard.heading}
                    </p>
                    <div className="font-Montserrat text-[#030522aa] text-base leading-[150%] fw-normal text-center max-w-[266px] pb-8">
                        {processcard.para}
                    </div>
                </div>
                <div className="w-[50px] h-[50px] rounded-full bg-030522] flex justify-center items-center  bg-[#030522]">
                    {" "}
                    <img src={processcard.circle} alt="img-2" className="cursor-pointer" />
                </div>
            </div>
        </div>
    ));
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-3 ">
                <h2 className=" font-Montserrat sm:text-[40px] text-[36px] font-bold text-center text-[#030522] ">Our Features</h2>
                <div className="flex flex-wrap flex-row py-12 justify-center">
                    {list}
                </div>
            </div>
        </div>
    );
};

export default Cardsec;