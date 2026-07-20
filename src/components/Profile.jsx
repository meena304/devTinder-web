import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import EditProfile from "./EditProfile";

const Profile = () =>{
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
    if(!user) return navigate('/login')
    console.log(user)

   

    return (
        <>
        <EditProfile user={user} />
        </>
    )

}

export default Profile;