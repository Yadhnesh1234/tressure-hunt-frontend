import Login from '../../components/login'
import { useState } from 'react';
import HeroSection from '../../components/HeroSection';

const Home = () => {
  const [displayLogin, setDisplayLogin] = useState(false);
  return (
    <>
    <div className="bg-[url('file:///home/yadhnesh/Downloads/12874597_9Z_2102.w026.n002.116B.p1.116.jpg')] bg-cover bg-norepeat bg-center  ">
      <div className={`hero min-h-screen bg-slate-800  bg-opacity-60 `}>
            {  
            !displayLogin?  
            <div className="w-full h-screen items-center justify-center flex flex-col">
                <HeroSection/>
                <button onClick={()=>{setDisplayLogin(true)}} className="px-8 py-3 mt-8 text-medium text-orange-700 font-bold text-2xl hover:bg-yellow-500 bg-yellow-400 rounded-xl">Login</button>
            </div>  :
            <Login/>
            }
      </div>
    </div>
  </>
  )
}

export default Home