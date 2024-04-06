import React from 'react'
import { Assignment } from "../Types";
import AssignmentInfoCard from './AssignmentInfoCard';
import CandidateInfo from './CandidateInfo';

const AssignmentDashboard = ({
    duration_in_seconds,
    ends_at,
    id,
    link,
    status,
    title }: Assignment) => {
    return (
        <>
            <div className="flex flex-row sm:flex-col-reverse 2xl:flex-row">
                <div className="flex flex-col">
                    <div className="header mt-4 mb-2 flex flex-col justify-start items-start">
                        <div className="mt-2 mb-2">
                            <p className='text-black mb-1'><span className='text-gray-500'>Pages </span>/ Assignment</p>
                            <h4 className='font-bold text-lg'>{title}</h4>
                        </div>
                    </div>
                    <AssignmentInfoCard
                        duration_in_seconds={duration_in_seconds}
                        ends_at={ends_at}
                        id={id}
                        link={link}
                        status={status}
                        title={title}
                        key={id}
                    />

                </div>
                <CandidateInfo key={"Name"} />
            </div>
        </>
    )
}

export default AssignmentDashboard
