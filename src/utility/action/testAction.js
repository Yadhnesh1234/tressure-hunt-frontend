import {GET_NEXT_QUESTION,VERIFY_ANSWER,END_TEST} from "../api"
export const startTest=()=>{
    return async (dispatch)=>{
        try{
         localStorage.setItem("start_test",true)
         dispatch({
              type:"START_TEST",
              startTest:true,
              question:"",
              question_no:0
            })
        }catch(error){
           alert(error.message)
        }
    }
}

export const nextQuestion=()=>{
   return async (dispatch)=>{
      try{
         const res = await fetch(GET_NEXT_QUESTION,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer "+localStorage.getItem("token")
            }
         });
         const data = await res.json();
         if(!data)
           throw new Error(data.message)
         dispatch({
            type:"NEXT_QUESTION",
            question:data.data.question,
            question_no:data.data.questionId
         })
      }catch(error){
         alert(error.message)
      }
  }  
}

export const verifyAnswer=(answer,quesNo)=>{
   return async (dispatch)=>{
      try{
         const res = await fetch(VERIFY_ANSWER,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer "+localStorage.getItem("token")
            },
            body:JSON.stringify({
               questionId: quesNo,
               answer:answer
            })
         });
         const data = await res.json();
         console.log(data)
         if(data.data.answerCorrect){
            dispatch(nextQuestion())
         }else  throw new Error("Wrong Answer !!! You didn't got a answer")
      }catch(error){
          alert(error.message)
      }
   }
}

export const endTest=(quesNo,answer)=>{
   return async (dispatch)=>{
      try{
         const res = await fetch(END_TEST,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer "+localStorage.getItem("token")
            },
            body:JSON.stringify({
               questionId: quesNo,
               answer:answer
            })
         });
         const data = await res.json();
         dispatch({
            type:"END_TEST",
         })
         alert(data.message)
         localStorage.setItem("start_test",false)
      }catch(error){
         console.error("Error fetching user data:", error);
      }
  }
}