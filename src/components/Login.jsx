import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";



const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
             const payload = {
            email : email,
            password : password
        }
        const loginUser = await axios.post(BASE_URL+'/login',payload,{withCredentials:true})

       
        dispatch(addUser(loginUser.data.data))
        return navigate('/');
        } catch (error) {

            setError(error.response.data.message)

            console.log(error.response.data.message)
            
            
        }
       

    }

    const [isLoginForm , setisLoginForm] = useState(true)

      const [firstName , setFirstName] = useState("")
        const [lastName , setLastName] = useState("")
        // const [email , setEmail] = useState("")
        const [age , setAge] = useState("")
        const [gender , setGender] = useState("")
        const [profile , setProfile] = useState("")
        const [about , setAbout] = useState("")
        // const [password , setPassword] = useState("")

        // const [error,setError] = useState("")


        // const dispatch = useDispatch();
        // const navigate = useNavigate();

        const handleSignup = async() => {
            try { 
                const data = await axios.post(BASE_URL+'/signup',{firstName,lastName,email,age,gender,profile,about,password},{withCredentials:true})


                dispatch(addUser(data.data.data))
                return navigate('/profile')
            } catch (error) {

                console.log(error.message)
                setError(error.data.message)
                
            }
        }
    

    return (
        <>
            <div className="flex justify-center mt-5">


               

               

                 {isLoginForm ?  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                    <p className="text-red-500">{error}</p>
                    <button className="btn btn-neutral mt-4" onClick={handleSubmit}>Login</button>
                    <p onClick={()=>setisLoginForm((value)=>!value)}>New User ? Signup Here</p>
                   
                </fieldset> : 
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 me-3">
                    <legend className="fieldset-legend">Profile</legend>
    
                    <label className="label">First Name</label>
                    <input type="text"  className="input" onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" />
    
                    <label className="label">Last Name</label>
                    <input type="text"  className="input" onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
    
    
                    <label className="label">Email</label>
                    <input type="email"  className="input" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
    
                   
                    <label className="label">Age</label>
                    <input type="number"  className="input" onChange={(e)=>setAge(e.target.value)} placeholder="Age" />
    
                    <label className="label">Gender</label>
                    <input type="text"  className="input" onChange={(e)=>setGender(e.target.value)} placeholder="Gender" />
    
                   
                    
    
                    <label className="label">About</label>
                    <input type="text"  className="input" onChange={(e)=>setAbout(e.target.value)} placeholder="About" />
    
                     <label className="label">Profile</label>
                    <input type="text"  className="input" onChange={(e)=>setProfile(e.target.value)} placeholder="Profile" />

                    <label className="label">Password</label>
                    <input type="text"  className="input" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
    
    
    
                    <button className="btn btn-neutral mt-4"  onClick={handleSignup}>Signup</button>
                    <p onClick={()=>setisLoginForm((value)=>!value)}>Existing User? Login Here</p>
                    
                </fieldset>}


            </div>

            


        </>
    )
}

export default Login;