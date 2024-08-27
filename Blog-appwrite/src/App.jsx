import React from "react"
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { login,logout } from "./store/authSlice";
import authSlice from "./store/authSlice";
import authservice from "./appwrite/auth";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


function App() {
  const [loading, setloading] = useState(true);
  const dispatch=useDispatch()
  useEffect(() => {
    authservice.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  }, [])
  

  return !loading?(
    <div className="min-h-screen flex flex-wrap bg-gray-400 content-between text-center">
      <div className="w-full block ">
        <Header/>
        <Footer/>
      </div>
    </div>
  ): (null)
}

export default App
