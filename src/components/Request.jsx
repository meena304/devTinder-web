import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Request = () => {
   
    const request = useSelector(store => store.request)
   
    const dispatch = useDispatch();
  
    const [error,setErrror] = useState("")

    const requestResponse = async (status,requestId) => {
        try {

            const res = await axios.get(BASE_URL+'/request/review/'+status+'/'+requestId,{withCredentials:true})

            console.log(res.data)

            dispatch(removeRequest(requestId))


            
        } catch (error) {

            console.log(error.data)

            
        }
    }

    const requestList = async () =>{
       
        try {
            const requests = await axios.get(BASE_URL+'/user/request/received' , {withCredentials:true})
            console.log(requests.data.data)


            dispatch(addRequest(requests.data.data))
           

        } catch (error) {

            setErrror(error?.data?.message)
            console.log(error)


            
        }
    }

    useEffect(()=>{

        requestList();

    },[])

    if(!request) return ;
    if(request.length==0) return <h2>No request found</h2>

  

    

    return (
        <>

        <div className="flex justify-center p-10 ">

            <div className=" ">
                <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

  {request.map((data,index)=>(
     <li className="list-row" key={data.fromUserId._id} >
    <div className="text-4xl font-thin opacity-30 tabular-nums">{index+1}</div>
    <div><img className="size-10 rounded-box" src={data.fromUserId.profile}/></div>
    <div className="list-col-grow">
      <div>{data.fromUserId.firstName} {data.fromUserId.lastName}</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
       <div className="card-actions justify-center my-3">
                        <button className="btn btn-primary" onClick={()=>requestResponse('rejected',data._id)}>Reject</button>
                        <button className="btn btn-secondary" onClick={()=>requestResponse('accepted',data._id)}>Accept</button>

                    </div>
    </div>
    {/* <button className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button> */}
  </li>
  ))}
  
 
  
  
  
</ul>
            </div>

        </div>

        </>
    )
}

export default Request;