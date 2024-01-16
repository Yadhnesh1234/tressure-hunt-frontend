import {LOGIN_VERIFY_USER} from '../api'

export const login = (user) => {
  return async (dispatch) => {
    console.log(user)
    try {
      const res = await fetch(LOGIN_VERIFY_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailId: user.email,
          password:user.password
        }),
      });
      const data = await res.json();
      if(data.status==='fail'){
        localStorage.clear()
        dispatch({type:"DEFAULT"})
        throw new Error(data.message)
      }
      else{
      dispatch({
        type: "LOGIN",
        token: data.token,
        username: user.email,
        password: user.password,
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