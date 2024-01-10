import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL|| 'http://127.0.0.1:8000/api/v1'

const clientServices={
 
     clientSignup:(data)=>{
        return axios.post(`${BASE_URL}/auth/signUpAsClient`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
   updateprofile:(data)=>{
        return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/client-profile/update-company-profile`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    signIn: (data)=>{
        return axios.post(`${BASE_URL}/auth/signIn`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
   createTicket : (data)=>{
        return axios.post(`${BASE_URL}/ticket/client/create-ticket`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
  getsingleticket: ()=>{
    return axios.get(`${BASE_URL}/ticket/client/get-single-ticket`)
    },

    clientprofile : ()=>{
        return axios.get(`${BASE_URL}/ticket/client/get-single-ticket`)
    }
}
export default clientServices