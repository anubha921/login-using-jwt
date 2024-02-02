import React, { useState } from 'react';
import AuthUser from './AuthUser';
import {Link} from 'react-router-dom'

function SignIn() {
    const personInfo = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(personInfo);
    const {http, setToken} = AuthUser();
    const [invalidReq, setInvalidReq] = useState("");

    const handleChangeEmail = (e) => {
        setUser((prevInp)=>({...prevInp, email: e.target.value}))
    }
    const handleChangePassword = (e) => {
        setUser((prevInp)=>({...prevInp, password: e.target.value}))
    }

    const handleSignInEvent = (e)=>{
        e.preventDefault()
        http.post('/login',{email: user.email, password: user.password})
        .then((res)=>{
            console.log(res.data)
            if(res.data.data.Email === user.email){
                setToken(res.data.data, res.data.data.Token)
            }
        })
        .catch((err)=>{
            setInvalidReq(err.response.data.Message)
            console.log("invalid",err.response)
        })
    }
    
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 shadow-md rounded-md w-96" onSubmit={handleSignInEvent}>
        <h2 className="text-2xl font-semibold mb-4">SignIn</h2>
        <h3>{invalidReq}</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full border p-2 rounded-md" placeholder="Enter your email" value={user.email} onChange={handleChangeEmail}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full border p-2 rounded-md" placeholder="Enter your password" value={user.password} onChange={handleChangePassword}
          />
        </div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600 mb-2">SignIn</button>
        <span>Not a member?</span>
        <Link to="/signup" className="text-blue-600 p-3">SignUp</Link>
      </form>
    </div>
  )
}

export default SignIn
