import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../utils/constants";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice";
import { useNavigate } from "react-router";
import { useState } from "react";

const UserCard = ({user}) => {
    const dispatch = useDispatch();
    const feed = useSelector(store=>store.feed)
    const navigate = useNavigate();
    const [noFeed,setNoFeed] = useState(false)
    

    const handleActivity = async(status,userId) => {
        try {
            console.log(status,userId)

            const res = await axios.get(BASE_URL+'/request/send/'+status+'/'+userId,{withCredentials:true})
            console.log(res.data)

            dispatch(removeUserFromFeed(userId))
            if(feed.length==0){

                setNoFeed(true)

            }
           
        } catch (error) {

            console.log(error)
            
        }
    }
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                    <img
                        src={user.profile}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
                    <p>{user.about}</p>
                    <p>{user.age},{user.gender}</p>

                    <div className="card-actions justify-center my-3">
                        <button onClick={()=>handleActivity('ignored',user._id)} className="btn btn-primary">Ignore</button>
                        <button onClick={()=>handleActivity('interested',user._id)} className="btn btn-secondary">Interested</button>

                    </div>
                </div>
            </div>
    )
}

export default UserCard