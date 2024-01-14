import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { startTest } from "../../utility/action/testAction"

const Instruction = ()=>{
   
    const [userName,setUserName] = useState(null)
    const [prompt,setPrompt] = useState(false)

    const test = useSelector((state)=>state.test)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        setUserName(localStorage.getItem("email"))   
    },[])

    useEffect(()=>{
        if(test.startTest)
          navigate("/test")
    },[test.startTest,navigate])

    return(
        <>
        <h1>Welcome to Test {userName},</h1>
        {prompt && (<div>
            <p>Sure To start the TEST</p>
            <button onClick={()=>{dispatch(startTest())}}>OK</button>
            <button onClick={()=>{setPrompt(false)}}>NO</button>
        </div>)}
        <button onClick={()=>{setPrompt(true)}}>Start Test</button>
        </>
    )
}

export default Instruction