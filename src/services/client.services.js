import axios from "axios";

const ClientServices={
     clientSignup:(data)=>{
        return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signUpAsClient`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    contact : (data)=>{
        return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`,data,{
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
        return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signIn`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
   createTicket : (data)=>{
        return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/ticket/client/create-ticket`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
  getmyTickets : (data)=>{
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/ticket/client/my-tickets/2`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    policy : (data)=>{
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/en/privacy_policy`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    conditions : (data)=>{
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/en/term_condition`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    about : (data)=>{
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    contact : (data)=>{
        return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    },
    clientprofile : (data)=>{
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/client-profile`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
}
export default ClientServices