import {Routes,Route} from 'react-router-dom'
import AdminLogin from './pages/Admin/Dashbord'
import Home from './pages/Home'
import Instruction from './pages/Instruction'
import Test from './pages/Test'


const App=()=>{

return(
    <>
  <Routes>
      
    <Route path="/" Component={Home}></Route>
    <Route path="/instruction" Component={Instruction}></Route>
    <Route path="/test" Component={Test}></Route>
    <Route path="/admin" Component={AdminLogin}></Route>
    
  </Routes>
    </>
)

}

export default App