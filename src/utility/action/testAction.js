export const startTest=()=>{
    return async (dispatch)=>{
        try{
           dispatch({
              type:"START_TEST",
              startTest:true,
              questions:["What is Kitehjfhjhdjhjzhjhjghjhfjg sfjkjkjkjkjgkksdj shjgksjkjgd dhgjkfhtytsNfjiuysuiee uurus","What Is Matter","What is Defaulter","Who is Yadhnesh"]
           })
        }catch(error){
           console.error("Error fetching user data:", error);
        }
    }
}

export const nextQuestion=({answer})=>{
   return async (dispatch)=>{
      try{
         console.log("From Next Answer",answer)
         dispatch({
            type:"NEXT_QUESTION",
         })
      }catch(error){
         console.error("Error fetching user data:", error);
      }
  }  
}

export const endTest=()=>{
   return async (dispatch)=>{
      try{
         const time = new Date()
         const currentTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
         console.log(currentTime)
         dispatch({
            type:"END_TEST",
         })
      }catch(error){
         console.error("Error fetching user data:", error);
      }
  }
}