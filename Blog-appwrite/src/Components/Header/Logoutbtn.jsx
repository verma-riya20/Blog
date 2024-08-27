import React from 'react'
import {useDispatch} from 'redux';
import authservice from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function Logoutbtn() {
    const dispatch=useDispatch();
    const logouthandler=()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div>Logout</div>
  )
}

export default Logoutbtn