import React, { useState } from 'react'
import AuthUser from './AuthUser';

function SignUp() {
    const personInfo = {
        name: '',   
        email: '',
        password: ''
    }
    const [user, setUser] = useState(personInfo);
    const {http} = AuthUser();

    const handleChangeName = (e) => {
        setUser((prevInp)=>({...prevInp, name: e.target.value}))
    }
    const handleChangeEmail = (e) => {
        setUser((prevInp)=>({...prevInp, email: e.target.value}))
    }
    const handleChangePassword = (e) => {
        setUser((prevInp)=>({...prevInp, password: e.target.value}))
    }

    const handleSignUpEvent = (e)=>{
        e.preventDefault()
        http.post('/registration',{name: user.name, email: user.email, password: user.password})
        .then((res)=>{
            console.log(res.data)
        })
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 shadow-md rounded-md w-96" onSubmit={handleSignUpEvent}>
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full border p-2 rounded-md" placeholder="Enter your name" value={user.name} onChange={handleChangeName}/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full border p-2 rounded-md" placeholder="Enter your email" value={user.email} onChange={handleChangeEmail}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full border p-2 rounded-md" placeholder="Enter your password" value={user.password} onChange={handleChangePassword}
          />
        </div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600">SignUp</button>
      </form>
    </div>
  )
}

export default SignUp
