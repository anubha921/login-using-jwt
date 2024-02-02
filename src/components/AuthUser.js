import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = ()=>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    const getUser = ()=>{
        const userString = localStorage.getItem('user');
        const userDetail = JSON.parse(userString);
        return userDetail;
    }

    const [token,setToken] = useState(getToken());
    const [userInfo,setUser] = useState(getUser());

    const logOut = ()=>{
        localStorage.clear();
        navigate('/')
    }

    const saveToken = (user,token)=>{
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user)); 

        setToken(token);
        setUser(userInfo);
        navigate('/dashboard')
    }
    const http = axios.create({
        baseURL: "http://restapi.adequateshop.com/api/authaccount",
        headers: {
            "Content-Type" : "application/json",
            // "Authorization": `Bearer ${token}`
        }
    });
    return {
        setToken: saveToken,
        token,
        userInfo,
        getToken,
        getUser,
        http,
        logOut
    }
}
//signin using tanya2@gmail.com, qwert1234
//signup api is not working
