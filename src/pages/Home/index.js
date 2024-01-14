import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { login } from "../../utility/action/userAction"

const Home = ()=>{
    const user = useSelector((state)=>state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
      if(user.name==="")
      console.log("Initial Value",user)
      else
      console.log("Updated Value",user)
    },[user])

    return(
        <>
        <h1>Hello I am From Home</h1>
        <button onClick={()=>{
            dispatch(login())
        }}>CLick Me</button>
        </>
    )
}

export default Home