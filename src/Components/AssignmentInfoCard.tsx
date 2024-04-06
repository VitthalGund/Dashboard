import { Assignment } from '@/Types'
import React from 'react'
import Image from "next/image";
import box from "../assests/box.svg";
import copy from "../assests/copy.svg";
import pen from "../assests/pencil.svg";
import CandidateList from './CandidateList';

const AssignmentInfoCard = ({
    duration_in_seconds,
    ends_at,
    id,
    link,
    status,
    title }: Assignment) => {

    return (
        <>
            <div className="bg-white p-5 flex flex-col gap-3 rounded max-h-fit">
                <div className="flex flex-row justify-between w-full">
                    <h4 className='font-bold text-lg'>{title}</h4>
                    <p className={`font-bold flex items-center gap-3 ${status == "Active" ? "text-green-500" : "text-red-600"}`}>{status}
                        <Image src={pen} alt="plus" width={300} height={300} className='h-8 w-8 p-2 rounded-lg bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' /></p>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <h4 className='text-sm font-bold text-gray-500'>Assignment Link</h4>
                    <p className={`text-blue-700 underline`}>{link}</p>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <h4 className='text-sm font-bold text-gray-500'>Assignment Hours</h4>
                    <p className={`font-bold text-gray-500`}>{new Date(duration_in_seconds).getHours()} hours</p>
                </div>

                <div className="flex flex-row justify-between w-full">
                    <h4 className='text-sm font-bold text-gray-500'>Assignment Ends at</h4>
                    <p className={`font-bold text-gray-500`}>{new Date(ends_at).toDateString()}</p>
                </div>

                <div className="flex flex-row justify-start w-96 mt-5 gap-5">

                    <button type="button" className="py-1 px-4 inline-flex items-center gap-x-2 text-sm text-black font-bold rounded-lg border border-transparent hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 uppercase shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                        <Image src={box} width={300} height={300} alt="plus" className='h-9 w-9 p-2 rounded-lg ' />
                        To Review
                    </button>

                    <button type="button" className="py-1 px-4 inline-flex items-center gap-x-2 text-sm text-black font-bold rounded-lg border border-transparent hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 uppercase">
                        <Image src={copy} width={300} height={300} alt="plus" className='h-9 w-9 p-2 rounded-lg ' />
                        Shortlisted
                    </button>
                </div>
            </div>
            <div className="bg-white flex flex-col gap-3 rounded max-h-fit">

                <CandidateList />
            </div>
        </>
    )
}

export default AssignmentInfoCard
