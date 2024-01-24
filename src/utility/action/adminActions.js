import {RESET_USER,ADMIN_LOGIN,GET_ALL_USERS,GET_RESULT} from '../api'

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
      localStorage.setItem("admin_token", data.token)
      localStorage.setItem("admin-verified",true)
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

export const getAllUsers=()=>{
  return async (dispatch) => {
  try {
    const res = await fetch(GET_ALL_USERS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+localStorage.getItem("admin_token")
      }
    });
    const data = await res.json()
    console.log(data)
    dispatch({
      type: "GET_USERS",
      users:data.data
    });
  } catch (error) {
    alert(error.message)
  }
 }
}

export const getResult=()=>{
  return async (dispatch) => {
  try {
    const res = await fetch(GET_RESULT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+localStorage.getItem("admin_token")
      }
    });
    const data = await res.json()
    console.log(data)
    dispatch({
      type: "GET_RANKS",
      result:data.data
    });
  } catch (error) {
    alert(error.message)
  }
 }
}

export const resetUser=(user_id)=>{
   return async (dispatch)=>{
     try{
      const res = await fetch(RESET_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer "+localStorage.getItem("admin_token")
        },
        body: JSON.stringify({
           userId:user_id
        })
      });
      const data = await res.json()
      alert(data.message)
     }catch(error){
      alert(error.message)
     }
   }
}



export const logout = () =>{
    localStorage.clear();
    return{ type:"LOGOUT"  }
}