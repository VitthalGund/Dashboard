import React, { useEffect, useRef } from 'react'
import { Assignment } from "../Types";
import AssignmentInfoCard from './AssignmentInfoCard';
import CandidateInfo from './CandidateInfo';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';
import { getAssignmentInfo } from '@/lib/features/candiate/candidateSlice';


const AssignmentDashboard = () => {

    const dispatch = useAppDispatch();
    const assignmentInfo = useAppSelector((state) => state?.candidateSlice?.assignmentInfo) as Assignment;
    const loading = useAppSelector((state) => state.candidateSlice.loading);
    useEffect(() => {
        dispatch(getAssignmentInfo());
    }, []);


    return (
        <>
            <div className="flex flex-row gap-4 w-fit lg:flex-row md:flex-col-reverse">
                <div className="flex flex-col w-1/3">
                    <div className="header mt-4 mb-2 flex flex-col justify-start items-start">
                        <div className="mt-2 mb-2">
                            <p className='text-black mb-1'><span className='text-gray-500'>Pages </span>/ Assignment</p>
                            <h4 className='font-bold text-lg'>{!loading && assignmentInfo?.title}</h4>
                        </div>
                    </div>
                    <AssignmentInfoCard
                        duration_in_seconds={assignmentInfo?.duration_in_seconds}
                        ends_at={assignmentInfo?.ends_at}
                        id={assignmentInfo?.id}
                        link={assignmentInfo?.link}
                        status={assignmentInfo?.status}
                        title={assignmentInfo?.title}
                        key={assignmentInfo?.id}
                    />
                </div>
                <CandidateInfo key={"Name"} />
            </div>
        </>
    )
}

export default AssignmentDashboard
