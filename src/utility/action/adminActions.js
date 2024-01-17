import {ADMIN_LOGIN} from '../api'

export const login = (username,password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(ADMIN_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password:password
        }),
      });
      const data = await res.json();
      localStorage.clear()
      if(data.status==='fail'){
        dispatch({type:"DEFAULT"})
        throw new Error(data.message)
      }
      else{
      alert("Login Successfull")
      dispatch({
        type: "LOGIN",
        token: data.token,
        username: username,
        password: password,
        verified:true
      });
    }
    } catch (error) {
      alert(error.message)
    }
  };
};


export const logout = () =>{
    return{ type:"LOGOUT"  }
}