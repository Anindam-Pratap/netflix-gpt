import { useState } from "react"
import Header from "./Header"


const Login = () => {
  const [loginPage,setLoginPage] = useState(true)

  const changeLogPage = () => {
    setLoginPage(!loginPage)
  }
  return (
    <div>
      <Header />
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
        alt="background-image"/>
      
      <form className="absolute bg-black w-3/12 mx-auto my-36 right-0 left-0 p-10 text-white bg-opacity-70 rounded-lg">
      <h1 className="text-3xl font-bold p-2 m-2 ">{
        loginPage?"Sign In":"Sign Up"
        }</h1>
        {!loginPage &&
        <input className="w-full p-2 m-2 bg-slate-800 rounded-md opacity-60 text-white" type="text" placeholder="Full Name"/>
        }
        <input className="w-full p-2 m-2 bg-slate-800 rounded-md opacity-60 text-white" type="text" placeholder="Email Adress" />
        <input className="w-full p-2 m-2 bg-slate-800 rounded-md opacity-60" type="text" placeholder="Password" />
        <button className="bg-red-600 w-full p-2 m-2 rounded-md">{
        loginPage?"Sign In":"Sign Up"
        }</button>
        <p className="p-2 m-2 cursor-pointer" onClick={changeLogPage}>
          {loginPage?
          "New to Netflix? Sign Up now":
          "Already Registered? Sign In"}
          </p>
       </form>
      
    </div>
  )
}

export default Login