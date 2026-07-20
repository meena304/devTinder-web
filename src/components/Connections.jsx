import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addConnection } from "../utils/connectionSlice";
import { useEffect, useState } from "react";

const Connections = () => {

            
    

    const connection = useSelector(store => store.connection)
   
    const dispatch = useDispatch();
  
    const [error,setErrror] = useState("")

    const connectionList = async () =>{
       
        try {
            const connection = await axios.get(BASE_URL+'/user/connections' , {withCredentials:true})
            console.log(connection.data.data)


            dispatch(addConnection(connection.data.data))
           

        } catch (error) {

            setErrror(error?.data?.message)
            console.log(error)


            
        }
    }

    useEffect(()=>{

        connectionList();

    },[])

     if(!connection) return ;
    if(connection.length==0) return <h2>No connection found</h2>

  

    

    return (
        <>

        <div className="flex justify-start p-10 ">

            <div className=" ">
                <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

  {connection.map((data,index)=>(
     <li className="list-row">
    <div className="text-4xl font-thin opacity-30 tabular-nums">{index+1}</div>
    <div><img className="size-10 rounded-box" src={data.profile}/></div>
    <div className="list-col-grow">
      <div>{data.firstName} {data.lastName}</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
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

export default Connections;