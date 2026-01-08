import React, { useState } from "react"

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
        <div className="bg-white/90 backdrop-blur-sm p-14 rounded-2xl shadow-xl border border-white/20">
            <form onSubmit={(e)=> {
              submitHandler(e) }} 
              className="flex flex-col items-center justify-center space-y-6 w-80">
                <h1 className="text-2xl font-bold text-indigo-800 mb-6">Sign In</h1>
                
                <input required value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} className="w-full bg-white/50 rounded-lg py-3 px-4 text-base text-indigo-900 outline-none placeholder:text-indigo-400 border-2 border-indigo-100 focus:border-indigo-400 transition-colors" type="email" placeholder="Enter Your Email" />
                
                <input required value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }} className="w-full bg-white/50 rounded-lg py-3 px-4 text-base text-indigo-900 outline-none placeholder:text-indigo-400 border-2 border-indigo-100 focus:border-indigo-400 transition-colors" type="password" placeholder="Enter Password" />
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg py-3 px-4 text-lg text-white font-medium shadow-md hover:shadow-lg transition-all duration-200">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login