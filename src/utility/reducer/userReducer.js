const initialState={
    token:"",
    email:"",
    password:"",
    verified:false
}

const userReducer = (state=initialState,action) =>{
   switch(action.type){
     case "LOGIN" :
        return{
            ...state,
            token:action.token,
            email:action.username,
            password:action.password,
            verified:action.verified
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