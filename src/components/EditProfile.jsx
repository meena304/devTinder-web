import { useState } from "react"
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {
        const [firstName , setFirstName] = useState(user.firstName)
        const [lastName , setLastName] = useState(user.lastName)
        const [email , setEmail] = useState(user.email)
        const [age , setAge] = useState(user.age)
        const [gender , setGender] = useState(user.gender)
        const [profile , setProfile] = useState(user.profile)
        const [about , setAbout] = useState(user.about)

        const dispatch = useDispatch();

        const handleUpdate = async() => {
            try { 
                const data = await axios.post(BASE_URL+'/profile/edit',{firstName,lastName,email,age,gender,profile,about},{withCredentials : true})


                dispatch(addUser(data.data.data))
            } catch (error) {

                console.log(error.message)
                
            }
        }
    
    
    
        return (
            <>
            <div className="flex justify-center mt-5">
    
    
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 me-3">
                    <legend className="fieldset-legend">Profile</legend>
    
                    <label className="label">First Name</label>
                    <input type="text" value={firstName} className="input" onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" />
    
                    <label className="label">Last Name</label>
                    <input type="text" value={lastName} className="input" onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
    
    
                    <label className="label">Email</label>
                    <input type="email" value={email} className="input" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
    
                   
                    <label className="label">Age</label>
                    <input type="number" value={age} className="input" onChange={(e)=>setAge(e.target.value)} placeholder="Age" />
    
                    <label className="label">Gender</label>
                    <input type="text" value={gender} className="input" onChange={(e)=>setGender(e.target.value)} placeholder="Gender" />
    
                    {/* <select name="gender" value={gender} defaultValue="Pick a color" className="select">
                        <option disabled={true}>Select Gender</option>
                        <option value={male}>Male</option>
                        <option value={female}>Female</option>
                        <option value={other}>Other</option>
                    </select> */}
                    
    
                    <label className="label">About</label>
                    <input type="text" value={about} className="input" onChange={(e)=>setAbout(e.target.value)} placeholder="About" />
    
                     <label className="label">Profile</label>
                    <input type="text" value={profile} className="input" onChange={(e)=>setProfile(e.target.value)} placeholder="Profile" />
    
    
                    <button className="btn btn-neutral mt-4"  onClick={handleUpdate}>Update</button>
    
                    
                </fieldset>
    
                <UserCard user={{firstName,lastName,email,age,gender,profile,about}}/>
               
    
    
            </div>
            </>
        )
}


export default EditProfile;