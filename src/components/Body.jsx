import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";


const Body = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(store=> store.user)
    const fetchUser = async ()=>{
        console.log (userData)

        if(userData) return;
      try{  const user = await axios.get(BASE_URL+'/profile/view',{
            withCredentials:true
        })

        dispatch(addUser(user.data))
        }
       
        catch(err){
            if(err.status==401){
                return navigate('/login')
            }
        }

    }

    useEffect(()=>{
        console.log(userData)
      
            fetchUser()
        
    },[])
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>

        </>

    )
}

export default Body;