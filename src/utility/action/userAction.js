export const login = () =>{
      return{
        type:"LOGIN",
        token:"t1234",
        name:"Gaurav"
      }
}

export const logout = () =>{
    return{ type:"LOGOUT"  }
}