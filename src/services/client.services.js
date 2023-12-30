import axios from "axios";

const ClientServices={
   clientSignup,
}

const clientSignup = (data)=>{
    return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/signup`,data,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

export default ClientServices