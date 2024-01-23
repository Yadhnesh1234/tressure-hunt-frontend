import { useEffect,useState,useRef } from "react"
import { endTest,nextQuestion,verifyAnswer } from "../../utility/action/testAction"
import { logout } from "../../utility/action/userAction"
import { useSelector,useDispatch } from "react-redux"
import {useNavigate} from 'react-router-dom'
import Question from "../../components/question"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Alert from "../../components/alert"
import Loader from "../../components/loader"
import CircularProgress from '@mui/material/CircularProgress';

const validationSchema = Yup.object().shape({
    answer: Yup.string().required('Answer is required'),
});
 
const Test = ()=>{

    const [prompt,setPrompt] = useState(false)
    const [btn,setBtn] = useState(false)
    const [ans,setAns] = useState("")
    const [load,setLoad]=useState(true)
    const [loadNext,setLoadNext]=useState(false)
    const test = useSelector((state)=>state.test)
    const verifyAnsStatus=useRef(test.ansVerifiedStatus)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    useEffect(()=>{
      setLoadNext(true)
      Promise.resolve(dispatch(nextQuestion()))
      .then(()=>{
         setLoad(false) 
         setLoadNext(false)
      })
    },[dispatch])

    useEffect(()=>{
      verifyAnsStatus.current=test.ansVerifiedStatus;
      console.log(test.ansVerifiedStatus)
    },[test])

    const nextQuestionApiCall=(resetForm)=>{
       Promise.resolve(dispatch(nextQuestion()))
      .then(()=>{
       resetForm()
       setLoadNext(false)
     })
    }
    
    const handleSubmit= async (values,{resetForm})=>{
      if(btn){
        setLoadNext(true)
        Promise.resolve(dispatch(verifyAnswer(values.answer,test.questionNo)))
        .then(()=>{
         if(verifyAnsStatus.current){
          nextQuestionApiCall(resetForm)
        }else{
           setTimeout(nextQuestionApiCall(resetForm),5000)
        }
      })
      }else{
          setAns(values.answer)
      }
    }
    const dismiss_alert=()=>{
      setPrompt(false)
    }

    const end_test=()=>{
      Promise.resolve(dispatch(endTest(test.questionNo,ans)))
      .then(()=>{
          localStorage.clear()
          dispatch(logout())
          navigate("/")
      })
    }
    
    if(load){
      return  <Loader/>
    }
    return(
    <>
    <div style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/background_test.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
      }}>
    <div className={`hero min-h-screen bg-slate-800  bg-opacity-60 w-4xl h-4xl`}>
    <div className="w-screen  flex justify-center items-center min-h-[100vh] ">
    <div className="box w-10/12 md:w-5/12 flex items-center justify-center  px-12 py-6 rounded-2xl  d-flex flex-col shadow-[0px_10px_53px_8px_#87CEEB] bg-slate-950/50 ">
    <Question question={test.question} questionNo={test.questionNo}/>
    <Formik
      initialValues={{ answer: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="my-7">
        <label htmlFor="answer" className="text-slate-100 font-semibold">Answer:</label>
        <Field
          as="textarea"
          id="answer"
          name="answer"
          placeholder="Enter your answer"
          className="text-white py-2 px-3 mt-4 rounded-xl w-full border focus:border-yellow-300 bg-slate-950/50 border-blue-600 border-1 outline-none "
        />
        <div className="h-7 p-1">
        <ErrorMessage style={{color:'#EB5286',marginTop:"4px"}} name="answer" component="div" className="error" />
        </div>
        <div className="flex justify-between h-50 items-center">
        <button onClick={()=>{
            setPrompt(true)
            setBtn(false)
        }} className="cursor-pointer py-2 px-3 mt-4 rounded-xl w-20 focus:border-yellow-300 bg-slate-950/100 border-blue-600 border-1 bg-yellow-500 outline-none ">Submit</button>
        {loadNext?<CircularProgress/>:""}
        <button type="Submit" onClick={()=>{setBtn(true)}}  disabled={
          test.questionNo===15 ? true : false
        } className={`cursor-pointer py-2 px-3 mt-4 rounded-xl w-20 focus:border-yellow-300 bg-slate-950/100 border-blue-600 border-1  ${(test.questionNo===15 || loadNext)?"bg-gray-300":"bg-yellow-500"} outline-none `}>Next</button>
        </div>
      </Form>
    </Formik>
      </div>
      </div>
      {prompt && (
       <Alert message={"Are you sure you want to submit the test"} successFunc={end_test} dismissFunc={dismiss_alert}/>         
      )}
      </div>
    </div>

   

    </>
    )
}

export default Test