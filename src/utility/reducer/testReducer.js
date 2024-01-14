const initialState = {
    startTest:false,
    questions:[],
    questionNo:0
}


const testReducer = (state=initialState,action)=>{
 
  switch(action.type){
     case "START_TEST" : 
        return{
            ...state,
            startTest:action.startTest,
            questions:action.questions,
            questionNo:0
        }
     case "NEXT_QUESTION" :
        return{
           ...state,
           questionNo:state.questionNo+1
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