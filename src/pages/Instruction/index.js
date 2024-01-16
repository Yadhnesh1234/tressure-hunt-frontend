import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { startTest } from "../../utility/action/testAction"
import Alert from "../../components/alert"

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
        if(localStorage.getItem("start_test"))
          navigate("/test")
    },[test.startTest,navigate])


    const dismiss_alert=()=>{
        setPrompt(false)
    }

    const start_test=()=>{
        console.log(userName)
        dispatch(startTest()) 
    }

    return(
        <>
        <div style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/background_dark.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
      }}>
        <div className={`hero min-h-screen bg-slate-800  bg-opacity-60 `}>
        <div className="w-screen  flex justify-center items-center min-h-[80vh] ">
        <div className="box w-10/12 md:w-5/12 flex items-center justify-center  px-12 py-4 rounded-2xl  d-flex flex-col shadow-[0px_10px_53px_8px_#ffbe2d] bg-slate-950/50 ">
          <h3 className="text-3xl font-bold  text-center text-white">Instructions</h3>
          <p className="text-md text-white text-center mt-4">
          Gather paperclips of different sizes and colors. Start by connecting them in various patterns to create your unique sculpture. Experiment with shapes and sizes for a visually appealing result.
          </p>
        <div className="my-4">
         <button onClick={()=>{setPrompt(true)}} className="cursor-pointer py-2 px-3 mt-4 rounded-xl w-full border focus:border-yellow-300 bg-slate-950/100 border-blue-600 border-1 bg-yellow-500 outline-none ">
          Start Test
          </button>
        </div>

        </div>
        </div>

        {
            prompt && (
            <>
             <Alert message="Are you sure, want to START the TEST" successFunc={start_test} dismissFunc={dismiss_alert}/>
            </>)
        }

        {/* {prompt && (<div>
            <p>Sure To start the TEST</p>
            <button onClick={()=>{dispatch(startTest())}}>OK</button>
            <button onClick={()=>{setPrompt(false)}}>NO</button>
        </div>)}
        <button onClick={()=>{setPrompt(true)}}>Start Test</button> */}
 
        </div>
        </div>
        </>
    )
}

export default Instruction