import {LOGIN_VERIFY_USER} from '../api'

export const login = (user) => {
  return async (dispatch) => {
    try {
      const res = await fetch(LOGIN_VERIFY_USER);
      const data = await res.json();
      dispatch({
        type: "LOGIN",
        token: "",
        username: data.email,
        password: data.password,
        verified:true
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
};


export const logout = () =>{
    return{ type:"LOGOUT"  }
}