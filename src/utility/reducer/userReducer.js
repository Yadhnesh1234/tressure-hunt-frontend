const initialState={
    token:"",
    name:""    
}


const userReducer = (state=initialState,action) =>{
   
   switch(action.type){
     case "LOGIN" :
        return{
            ...state,
            token:action.token,
            name:action.name
        }
      case "LOGOUT":
        return{
            ...initialState
        }
      default:
        return{
            ...state
        }

   }

}
export default userReducer