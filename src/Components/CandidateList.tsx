import React, { useEffect, useRef, useState } from 'react'
import Candidate from './Candidate';
import { candidate } from '@/Types';

import { getAssignmentInfo, getCandidatesList, setId } from '@/lib/features/candiate/candidateSlice';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';

const CandidateList = () => {
    const dispatch = useAppDispatch();
    const candidates = useAppSelector((state) => state?.candidateSlice?.candidateList) as candidate[];
    const loading = useAppSelector((state) => state?.candidateSlice?.loading);
    useEffect(() => {
        dispatch(getCandidatesList());
        setId(candidates?.[0]?.id);
    }, []);
    // console.log("client list: ", candidates)
    return (
        <>
            <section className="container mx-auto font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Candidate</th>
                                    <th className="px-4 py-3">Score</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {candidates &&
                                    candidates.map((item, idx) => {
                                        return (
                                            <Candidate
                                                id={item?.id}
                                                full_name={item?.full_name}
                                                email={item?.email}
                                                img={item?.img}
                                                score={item.score}
                                                index={idx}
                                                key={item.full_name}
                                            />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CandidateList;
