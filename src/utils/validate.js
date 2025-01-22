const validateUserCredentials = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^.{8,20}$/.test(password)
    
    if (!isEmailValid) return "Email Id is not valid"
    if (!isPasswordValid) return "Password is not Valid"
    

    //if everything checks out

    return null
}

export default validateUserCredentials