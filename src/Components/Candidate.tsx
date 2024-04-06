import { candidate } from '@/Types'
import React from 'react'
import icon from "../assests/userIcon.jpg"
import Image from "next/image"

const Candidate = ({ email, img, full_name, score, index }: candidate) => {
    return (
        <>
            <tr className={`text-gray-700 ${index === 0 ? "bg-gray-100" : ""}`}>
                <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <Image
                                className="object-cover w-full h-full rounded-full"
                                src={icon}
                                width={300} height={300}
                                alt="user" loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-black">{full_name}</p>
                            <p className="text-xs text-gray-600">{email}</p>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-3 text-xs">
                    <span className={`px-2 py-1 font-bold leading-tight ${score > 70 ? "text-green-400" : "text-yellow-300"} rounded-sm text-xl`}> {score}% </span>
                </td>
            </tr>
        </>
    )
}

export default Candidate
