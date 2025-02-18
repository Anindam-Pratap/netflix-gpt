import { useRef, useState } from "react"
import Header from "./Header"
import validateUserCredentials from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";


const Login = () => {
  const [loginPage, setLoginPage] = useState(true)
  const [errorMessage, setErrormessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const fullName = useRef(null)
  const dispatch = useDispatch()


  const validateUser = () => {
    const message = validateUserCredentials(email.current.value, password.current.value)
    setErrormessage(message)
    if (message) return
    if (!loginPage) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
             const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        
          }).catch((error) => {
            // An error occurred
            setErrormessage(error)
          });



        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + errorMessage)

        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
    
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + errorMessage)
        });
    }
  }

  const changeLogPage = () => {
    setLoginPage(!loginPage)
  }
  return (
    <div>
      <dev className="flex mx-10 md:flex-none md:mx-0">
      <Header />
      </dev>
      <img className="absolute h-screen object-cover md:h-auto md:object-none" src={BACKGROUND_IMG}
        alt="background-image" />

      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black md:w-3/12 m-3 md:mx-auto my-36 right-0 left-0 p-10 text-white bg-opacity-80 rounded-lg">
        <h1 className="text-3xl font-bold p-2 m-2 ">{
          loginPage ? "Sign In" : "Sign Up"
        }</h1>
        {!loginPage &&
          <input ref={fullName} className="w-full p-2 m-2 bg-slate-800 rounded-md opacity-60 text-white" type="text" placeholder="Full Name" />
        }
        <input ref={email} className="w-full p-2 m-2 bg-slate-800 rounded-md opacity-60" type="text" placeholder="Email Adress" />
        <input ref={password} className="w-full p-2 m-2 bg-slate-800 rounded-md opacity-60" type="password" placeholder="Password" />
        <p className="text-red-600 p-2 m-2 font-bold">{errorMessage}</p>
        <button className="bg-red-600 w-full p-2 m-2 rounded-md" onClick={validateUser} >{
          loginPage ? "Sign In" : "Sign Up"
        }</button>
        <p className="p-2 m-2 cursor-pointer" onClick={changeLogPage}>
          {loginPage ?
            "New to Netflix? Sign Up now" :
            "Already Registered? Sign In"}
        </p>
      </form>

    </div>
  )
}

export default Login