const initialState = {
    startTest:false,
    question:[],
    questionNo:0
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