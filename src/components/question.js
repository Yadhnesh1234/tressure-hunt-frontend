import React from 'react';


const Question = ({question,questionNo})=>{

    return(
        <>
        <div className="flex justify-start items-start">
        <p className="text-white text-2xl"><b>{ questionNo +".   "+question }</b></p>
        </div>
        </>
    )
}

export default Question