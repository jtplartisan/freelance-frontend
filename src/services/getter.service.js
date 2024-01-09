import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL|| 'http://127.0.0.1:8000/api/v1'
const getterServices={
    privacy : ()=>{
        return axios.get(`${BASE_URL}/en/privacy_policy`)
    },
    conditions : ()=>{
        return axios.get(`${BASE_URL}/en/term_condition`)
    },
    about : ()=>{
        return axios.get(`${BASE_URL}/en/latest-blog`)
    },
  
    contact : (data)=>{
        return axios.post(`${BASE_URL}/contact`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    latestblog : ()=>{
        return axios.get(`${BASE_URL}/en/latest-blog`)
    },
}
export default getterServices