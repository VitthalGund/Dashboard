"use client";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import icon from "../assests/userIcon.jpg";
import play from "../assests/play.svg";
import Image from "next/image";

const CandidateInfo = () => {
    let info = {
        about_me: "Lorem ipsum dolor sit amet asdf asf as asdf asd f asd fasdf",
        email: "richheather@example.com",
        experience: "5 years in sales...",
        full_name: "Alicia Stevenson",
        hobbies: "Guitar, Hiking, Reading",
        id: 30,
        introduction: "An experienced sales professional with a track record...",
        score: 82,
        scores: [
            { max_score: 10, min_score: 1, score_type: "Behavioural", user_score: 7 },
            {
                max_score: 10,
                min_score: 1,
                score_type: "Communication",
                user_score: 8,
            },
            {
                max_score: 10,
                min_score: 1,
                score_type: "Situation handling",
                user_score: 6,
            },
        ],
    };
    return (
        <>
            <div className="flex flex-row bg-white p-5 mt-24 rounded justify-center w-fit h-fit mr-3 sm:flex-col 2xl:flex-row">
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
                                        <p className="font-semibold text-black">{info.full_name}</p>
                                        <p className="text-xs text-gray-600">{info.email}</p>
                                    </div>
                                    <div className="px-4 py-3 text-xs">
                                        <span
                                            className={`px-2 py-1 text-center font-bold leading-tight ${info.score > 70 ? "text-green-400" : "text-yellow-300"
                                                } rounded-sm text-3xl`}
                                        >
                                            {" "}
                                            {info.score}%{" "}
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
                                <ProgressBar width={info.scores[0].user_score} key={""} />
                                <p
                                    className={`${info.scores[0].user_score > 7
                                        ? "text-green-400"
                                        : "text-yellow-300"
                                        } font-bold`}
                                >
                                    {info.scores[0].user_score}/{info.scores[0].max_score}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 justify-between items-center">
                            <p className="text-gray-400 font-bold">Communication</p>
                            <div className="flex flex-row gap-3 justify-between items-center">
                                <ProgressBar width={info.scores[1].user_score} key={""} />
                                <p
                                    className={`${info.scores[1].user_score > 7
                                        ? "text-green-400"
                                        : "text-yellow-300"
                                        } font-bold`}
                                >
                                    {info.scores[1].user_score}/{info.scores[1].max_score}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 justify-between items-center">
                            <p className="text-gray-400 font-bold">Situation handling</p>
                            <div className="flex flex-row gap-3 justify-between items-center">
                                <ProgressBar width={info.scores[2].user_score} key={""} />
                                <p
                                    className={`${info.scores[2].user_score > 7
                                        ? "text-green-400"
                                        : "text-yellow-300"
                                        } font-bold`}
                                >
                                    {info.scores[2].user_score}/{info.scores[2].max_score}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="more-info flex flex-col gap-5 mt-10 ">
                        <div className="about flex flex-col flex-wrap">
                            <h4 className="font-bold">About</h4>
                            <p>{info.about_me}</p>
                        </div>
                        <div className="about flex flex-col flex-wrap">
                            <h4 className="font-bold">Experience</h4>
                            <p>{info.experience}</p>
                        </div>
                        <div className="about flex flex-col flex-wrap">
                            <h4 className="font-bold">Hobbies</h4>
                            <p>{info.hobbies}</p>
                        </div>
                        <div className="about flex flex-col flex-wrap">
                            <h4 className="font-bold">Introduction</h4>
                            <p>{info.introduction}</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <Image
                        className="object-cover w-full h-full rounded border-t-[40px] border-[linear-gradient(to right, #ffffff ,#e2e8f0 )]"
                        src={icon}
                        alt="user"
                        width={600}
                        height={600}
                        loading="lazy"
                    />
                    {/* relative top-[16rem] right-[12rem] h-10 border-none sm:top-[27rem] sm:right-[20rem] */}
                    <Image
                        className="object-cover w-10 relative 2xl:top-[17rem] 2xl:right-[12rem] h-10 border-none sm:top-[27rem] sm:right-[20rem]"
                        src={play}
                        alt="user"
                        width={600}
                        height={600}
                        loading="lazy"
                    />
                </div>
            </div>
        </>
    );
};

export default CandidateInfo;
