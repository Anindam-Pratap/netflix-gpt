import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
    const user = useSelector(store => store.user)
    const navigate = useNavigate()
  const logout = () => {
    

signOut(auth).then(() => {
navigate("/")
}).catch((error) => {
  
});
  }
    return (
    <div className="h-20 bg-gradient-to-b absolute from-black  px-20 py-2 z-10 w-full">
    <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    alt="logo"
    />
    {user && (<div className="flex absolute right-0 p-2 z-10 top-4 ">
      <img alt="userIcon" className="h-12 w-12" src={user.photoURL}/>
      <button onClick={()=>logout()} className="">Log Out</button>
      </div>)}

    </div>
    )
}

export default Header