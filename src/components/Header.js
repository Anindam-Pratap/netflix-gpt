import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";


const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()

  const dispatch = useDispatch()



  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }

    })
    return () => unsubscribe();
  }
    , [])

  const logout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
       navigate("/error")
    });
  }
  return (
    <div className=" bg-gradient-to-b absolute from-black  px-20 py-2 z-10 w-full">
      <img className="w-44" src={LOGO}
        alt="logo"
      />
      {user && (<div className="flex absolute right-0 p-2 z-10 top-4 ">
        <img alt="userIcon" className="h-12 w-12" src={user.photoURL} />
        <button onClick={() => logout()} className="text-white">Log Out</button>
      </div>)}

    </div>
  )
}

export default Header