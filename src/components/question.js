import { useSelector } from "react-redux"
import React from 'react';


const Question = ({questionNo})=>{
   
    const test = useSelector((state)=>state.test)

    return(
        <>
        <h3>Question No { questionNo+1 }</h3>
        <p><b>{ test.questions[questionNo] }</b></p>
        </>
    )
}

export default Question