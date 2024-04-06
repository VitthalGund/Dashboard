import React from 'react';
import Image from "next/image";
import plus from "../assests/plus.svg";
const AssignmentCard = () => {
    return (
        <>
            <div className="flex flex-col bg-[#1ec3b3] p-5 gap-2 max-w-[300px] h-fit rounded-lg">
                <div className="mb-8">
                    <div className="bg-white w-12 flex justify-center rounded-lg">
                        <Image src={plus} alt="plus" width={300} height={300} className=' h-10 w-10 rounded-lg' />
                    </div>
                </div>
                <h4 className="font-bold text-white">New Assignment?</h4>
                <p className='text-white'>Select from pre-defined questions to have a quick turnaround.</p>
                <button type="button" className="text-black bg-white font-bold hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Create New Assignment</button>

            </div>
        </>
    )
}

export default AssignmentCard
