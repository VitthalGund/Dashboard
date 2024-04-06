import React from 'react'
import AssignmentCard from "./AssignmentCard"
import Image from "next/image"
import home from "../assests/home.svg"
import sliderIcon from "../assests/sliderIcon.png"

const Silder = () => {
    return (
        <>
            <div className="silder flex flex-col justify-start ml-5 w-fit">
                <div className="flex flex-row gap-2 items-center mt-5 mb-5 font-bold">
                    <div className="w-16 rounded-lg">
                        <Image src={sliderIcon} width={300} height={300} alt="plus" className='h-16 w-16 p-2 rounded-lg ' />
                    </div>
                    <h4>Hi, AltWorld</h4>
                </div>
                <div className="flex justify-center items-center"></div>
                <hr className='bg-slate-700 w-72' />
                <div className="flex flex-row gap-7 items-center mt-5 mb-5 font-bold">
                    <div className="bg-white w-16 rounded-lg">
                        <Image src={home} width={300} height={300} alt="plus" className='h-16 w-16 p-2 rounded-lg ' />
                    </div>
                    <h4>Dashboard</h4>
                </div>
                <AssignmentCard />
            </div>
        </>
    )
}

export default Silder
