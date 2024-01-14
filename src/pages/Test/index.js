import { useEffect,useState } from "react"
import { endTest,nextQuestion } from "../../utility/action/testAction"
import { logout } from "../../utility/action/userAction"
import { useSelector,useDispatch } from "react-redux"
import {useNavigate} from 'react-router-dom'
import Question from "../../components/question"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    answer: Yup.string().required('Answer is required'),
  });
  

const Test = ()=>{

    const [prompt,setPrompt] = useState(false)
    const [question_no,setQuestionNo ]= useState(0)

    const test = useSelector((state)=>state.test)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!test.startTest){
          localStorage.clear()
          dispatch(logout())
          navigate("/")
        }
    },[test.startTest,navigate,dispatch])
    
    useEffect(()=>{
        setQuestionNo(test.questionNo)
    },[test.questionNo])



    const handleSubmit= async (values,{resetForm})=>{
        dispatch(nextQuestion(values)) 
        resetForm()
    }

    
    return(
    <>
       
    <h1>Welcome To Test Page</h1>   
    <Question questionNo={question_no}/>

    <Formik
      initialValues={{ answer: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="answer">Answer:</label>
        <Field
          as="textarea"
          id="answer"
          name="answer"
          placeholder="Enter your answer"
        />
        <ErrorMessage name="answer" component="div" className="error" />

        <button type="Submit"  disabled={
          question_no<test.questions.length-1?false:true
        }>Next</button>

      </Form>
    </Formik>

       {prompt && (<div>
            <p>Sure To SUBMIT the TEST</p>
            <button onClick={()=>{dispatch(endTest())}}>OK</button>
            <button onClick={()=>{setPrompt(false)}}>NO</button>
        </div>)}

        <button onClick={()=>{setPrompt(true)}}>Submit</button>

    </>
    )
}

export default Test