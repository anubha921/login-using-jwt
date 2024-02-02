import React from 'react'
import AuthUser from './AuthUser'

function Dashboard() {
    const {token, logOut, userInfo} = AuthUser();
    const userName = userInfo.Name[0].toUpperCase() + userInfo.Name.slice(1);
    const logOutUser = () => {
        if(token !== undefined){
            logOut();
        }
    }
   
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
      <h1 className='text-2xl'>{userName} Logged In Successfully!!</h1>
      <button onClick={logOutUser} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Log Out</button>
      </div>
    </div>
  )
}

export default Dashboard
