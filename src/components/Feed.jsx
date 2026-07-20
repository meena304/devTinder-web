import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
   const dispatch = useDispatch();
   const feed = useSelector(store => store.feed);
   console.log(feed)
   

   const feedList = async () => {

   

    try{

        const data = await axios.get(BASE_URL+'/user/feed?page=1&per_page=2',{withCredentials:true})
        console.log(data.data.data.length)

        if(data.data.data.length==0){
        dispatch(addFeed([]))

        }
       else{ dispatch(addFeed(data.data.data))}


    }catch(error){

        console.log(error.message)
    }
    

   }

   useEffect(()=>{
    feedList();
   },[])

   if(!feed) return ;
    if(feed.length==0) return <h2>No request found</h2>
   


    return (
        <>
        <div className="flex justify-center mt-5">
            {feed && 
                <UserCard user={feed[0]}/>
            }
             {/* {feed && feed.length > 0 ? (
  <UserCard user={feed[0]} />
) : (
  <div className="flex justify-center">No Data</div>
)} */}
             </div>
        </>
    )
}


export default Feed;