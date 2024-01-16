import { useSelector } from "react-redux"
import React from 'react';


const Question = ({questionNo})=>{
   
    const test = useSelector((state)=>state.test)

    return(
        <>
        <div className="flex justify-start items-start">
        <p className="text-white text-2xl"><b>{ questionNo+1 +".   "+test.questions[questionNo] }</b></p>
        </div>
        </>
    )
}

export default Question