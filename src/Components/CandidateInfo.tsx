import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import icon from "../assests/userIcon.jpg";
import play from "../assests/play.svg";
import left from "../assests/arrowLeft.svg";
import right from "../assests/arrowRight.svg";
import Image from "next/image";
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Assignment, candidateComplete } from "@/Types";
import { getCandidateInfo } from "@/helper";
import { getAssignmentInfo, getCandidatesList } from "@/lib/features/candiate/candidateSlice";


const CandidateInfo = () => {
    const dispatch = useAppDispatch();
    const assignmentInfo = useAppSelector((state) => state.candidateSlice.assignmentInfo) as Assignment;
    const list = useAppSelector((state) => state.candidateSlice.candidateList[0]) as Assignment;
    const currentId = useAppSelector((state) => state.candidateSlice.currentId);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState<candidateComplete>();
    useEffect(() => {
        dispatch(getAssignmentInfo());
        dispatch(getCandidatesList());
        if (assignmentInfo.id && list?.id) {
            setLoading(true);
            getCandidateInfo({ assignmentId: assignmentInfo.id, id: +list?.id }).then(data => {
                setInfo(data);
                setLoading(false);
            })
        }
    }, [assignmentInfo?.id, currentId, dispatch, list?.id]);
    // console.log("Score: ", info?.scores)
    // React.useEffect(() => {
    //     const onLoad = () => window.open(`myprotocol://open${params}`, '_self')
    //     window.addEventListener('load', onLoad)
    //     return () => window.removeEventListener('load', onLoad)
    // }, [])


    return (
        <>
            {info?.full_name && <div className="flex flex-row bg-white p-5 mt-24 rounded justify-center w-[57vw] h-fit">
                <div className="flex flex-col rounded h-fit mr-3">
                    <div className="flex w-full h-fit">
                        <div className={`text-gray-700 `}>
                            <div className="px-4 py-3">
                                <div className="flex items-center text-sm">
                                    <div className="relative w-10 h-10 mr-3 rounded-full md:block">
                                        <Image
                                            className="object-cover w-full h-full rounded-full"
                                            src={icon}
                                            alt="user"
                                            width={300}
                                            height={300}
                                            loading="lazy"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-full shadow-inner"
                                            aria-hidden="true"
                                        ></div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black">{info?.full_name}</p>
                                        <p className="text-xs text-gray-600">{info?.email}</p>
                                    </div>
                                    <div className="px-4 py-3 text-xs">
                                        <span
                                            className={`px-2 py-1 text-center font-bold leading-tight ${info?.score > 70 ? "text-green-400" : "text-yellow-300"
                                                } rounded-sm text-3xl`}
                                        >
                                            {" "}
                                            {info?.score}%{" "}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="score mt-3 flex flex-col">
                        <div className="flex flex-row gap-3 justify-between items-center">
                            <p className="text-gray-400 font-bold">Behavioural</p>
                            <div className="flex flex-row gap-3 justify-between items-center">
                                <ProgressBar width={info?.scores?.[0]?.user_score ?? 0} key={""} />
                                <p
                                    className={`${info?.scores?.[0]?.user_score > 7
                                        ? "text-green-400"
                                        : "text-yellow-300"
                                        } font-bold`}
                                >
                                    {info?.scores?.[0]?.user_score}/{info?.scores?.[0]?.max_score}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 justify-between items-center">
                            <p className="text-gray-400 font-bold">Communication</p>
                            <div className="flex flex-row gap-3 justify-between items-center">
                                <ProgressBar width={info?.scores?.[1]?.user_score ?? 0} key={""} />
                                <p
                                    className={`${info?.scores?.[1]?.user_score > 7
                                        ? "text-green-400"
                                        : "text-yellow-300"
                                        } font-bold`}
                                >
                                    {info?.scores?.[1]?.user_score}/{info?.scores?.[1]?.max_score}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 justify-between items-center">
                            <p className="text-gray-400 font-bold">Situation handling</p>
                            <div className="flex flex-row gap-3 justify-between items-center">
                                <ProgressBar width={info?.scores?.[2]?.user_score ?? 0} key={""} />
                                <p
                                    className={`${info?.scores?.[2]?.user_score > 7
                                        ? "text-green-400"
                                        : "text-yellow-300"
                                        } font-bold`}
                                >
                                    {info?.scores?.[2]?.user_score}/{info?.scores?.[2]?.max_score}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="more-info flex flex-col gap-5 mt-10 ">
                        <div className="about flex flex-col flex-wrap">
                            <h4 className="font-bold">About</h4>
                            <p>{info?.about_me}</p>
                        </div>
                        <div className="about flex flex-col flex-wrap">
                            <h4 className="font-bold">Experience</h4>
                            <p>{info?.experience}</p>
                        </div>
                        <div className="about flex flex-col flex-wrap">
                            <h4 className="font-bold">Hobbies</h4>
                            <p>{info?.hobbies}</p>
                        </div>
                        <div className="about flex flex-col flex-wrap">
                            <h4 className="font-bold">Introduction</h4>
                            <p>{info?.introduction}</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-fit flex-row flex-nowrap">
                    <Image
                        className="object-cover w-80 h-full rounded border-t-[40px] border-[linear-gradient(to right, #ffffff ,#e2e8f0 )]"
                        src={icon}
                        alt="user"
                        width={600}
                        height={600}
                        loading="lazy"
                    />
                    <Image
                        className="object-cover w-10 text-white relative 2xl:top-[50%] 2xl:right-[45%] h-10 border-none sm:top-[50%] sm:right-[45%]"
                        src={play}
                        alt="user"
                        width={600}
                        height={600}
                        loading="lazy"
                    />

                    <div className="flex relative p-3 h-14  justify-center items-center top-[90%] right-[98%]">
                        <Image
                            className="object-cover w-[15%] relative left-[13%] bg-[#718096] z-50 p-5 rounded m-3"
                            src={left}
                            alt="user"
                            width={600}
                            height={600}
                            loading="lazy"
                        />
                        <div className="box relative shadow drop-shadow-2xl shadow-inherit bg-black text-white">
                            <h5 className="text-white relative bottom-8 lg:w-[17rem] text-center">Tell me about yourself</h5>
                            <p className="text-white lg:w-[17rem] text-center">
                                Question 1/11
                            </p>
                        </div>
                        <Image
                            className="object-cover w-[15%] relative right-[10%] bg-[#718096] p-5 rounded m-3"
                            src={right}
                            alt="user"
                            width={600}
                            height={600}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div >}
        </>
    );
};

export default CandidateInfo;
