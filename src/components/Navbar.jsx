import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from "../context/AuthContext";
import logo from '../assets/Netflix_Logo_CMYK.png'

const Navbar =()=> {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate();
  // console.log(user);
  const HandleLogout = async ()=>{
    try{
      await logOut();
      navigate('/')
    }catch (error){
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        {/* <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1> */}
        <img className="w-44" src={logo} alt="" />
      </Link>
      {user?.email ?(
        <div>
        <Link to="/account">
          <button className="text-white pr-4">Account</button>
        </Link>
          <button onClick={HandleLogout}  className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ">
            Logout
          </button>
      </div>
      ):(
        <div>
        <Link to="/login">
          <button className="text-white pr-4">Sing In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ">
            Sing Up
          </button>
        </Link>
      </div>
      )}
    </div>
  );
}

export default Navbar;
