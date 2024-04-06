import React from 'react'

const ProgressBar = ({ width }: { width: number }) => {
    return (
        <>
            <div className="w-[10rem] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 max-w-60">
                <div className={`${width > 7 ? "bg-green-400" : "bg-yellow-300"} h-2.5 rounded-full`} style={{ "width": `${width}rem` }}></div>
            </div >
        </>
    )
}

export default ProgressBar
