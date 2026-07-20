import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"
import { BASE_URL } from "../utils/constants"
import { removeUser } from "../utils/userSlice"


const Navbar = () => {

  const user = useSelector(store=>store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {

      await axios.post(BASE_URL+'/logout',{},{
        withCredentials:true
      })

      dispatch(removeUser())
      return navigate('/login')


      
    } catch (error) {

      console.log(error.message)
      
    }
  }


    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-xl">👩🏻‍💻 DevTinder</Link>
        </div>
        
        <div className="flex gap-2">
           {user && 
          <div className="dropdown dropdown-end flex mx-3">
            
            <h5 className="mt-2 mx-3"> Hi  {user.firstName}</h5>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.profile} />
              </div>
          
      
            </div>
             
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link className="justify-between" to='/profile'>
                  Profile
                  
                </Link>
              </li>
              <li><Link className="justify-between" to='/connections'>
                  Connections
                </Link></li>
              <li><Link className="justify-between" to='/requests'>
                  Requests
                </Link></li>
              <li><a onClick={logout}>Logout</a></li>
            </ul>
           
          </div>}
        </div>
      </div>
    )

}


export default Navbar