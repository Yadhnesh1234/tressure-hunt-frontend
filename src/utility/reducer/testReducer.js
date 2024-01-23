const initialState = {
    startTest:false,
    question:"",
    questionNo:0,
    ansVerifiedStatus:false
}


const testReducer = (state=initialState,action)=>{
 
  switch(action.type){
     case "START_TEST" : 
        return{
            ...state,
            startTest:action.startTest,
            question:action.question,
            questionNo:action.question_no
        }
     case "VERIFY_ANS":
       return{
         ...state,
         ansVerifiedStatus:action.response
       }
     case "NEXT_QUESTION" :
        return{
           ...state,
           question:action.question,
           questionNo:action.question_no
         } 
     case "END_TEST" :
        return{
           ...initialState
        }
     default:
        return{
          ...state
        }
   }

}

export default testReducer