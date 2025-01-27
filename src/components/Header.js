import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptPage } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configureSlice";


const Header = () => {
  const user = useSelector(store => store.user)
  const gptState = useSelector(store => store.gpt.gptPageState)
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
  
  const languageChange = (e) => {
     dispatch(changeLanguage(e.target.value))
  }
  const toggleTheGptPage = () => {
   dispatch(toggleGptPage())
  }
  return (
    <div className=" bg-gradient-to-b absolute from-black  px-20 py-2 z-10 w-full flex items-center ">
      <img className="w-44" src={LOGO}
        alt="logo"
      />
      <div className="flex items-center ml-auto space-x-4">
        {gptState && 
        <select onChange={languageChange} className="bg-black text-white rounded-md opacity-80">
        {SUPPORTED_LANGUAGES.map(language => (<option key={language.identifier}>{language.name}</option>))}
        </select>}
      {user && (<button className="bg-green-900 text-white rounded-md h-10 w-28 text-sm md:text-base" onClick={toggleTheGptPage}>{gptState?"Netflix":"Netflix GPT"}</button>)}
      {user && (<div className="flex items-center space-x-2">
        <img alt="userIcon" className="h-12 w-12" src={user.photoURL} />
        <button onClick={() => logout()} className="text-white">Log Out</button>
      </div>)}
      </div>

    </div>
  )
}

export default Header