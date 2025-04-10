import React from 'react';


const Question = ({question,questionNo})=>{

    return(
        <>
        <div className="flex overflow-auto justify-evenly" >
        <p className="text-white text-lg"><b>{questionNo+". "}</b></p>
        <p className="text-white text-lg text-center"><b>{question}</b></p>
        </div>
        </>
    )
}

export default Question
