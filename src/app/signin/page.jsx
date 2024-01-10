"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../styles/style.css'
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch } from 'react-redux';
import {login} from '../redux/authReducer';
import {toast} from 'react-toastify';
import clientServices from '@/services/client.services';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required()
});

function  Client() {
const { register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)});
const router=useRouter()
const dispatch=useDispatch()
const auth = useSelector(state => state.auth)
console.log(auth)

const onSubmit=(data)=>{
        console.log(data)
        clientServices.signIn(data)
        //  axios.post("http://localhost:8000/api/v1/auth/signIn",data)
          .then(response=>{
          dispatch(login(response.data.accessToken))
          localStorage.setItem('token' , response?.data?.data?.token)
          toast.success("Login SuccessFully")
          if(response.data.data.role == "client"){
            router.push("../tickets")
          }
          else if(response.data.data.role == "user"){
router.push("../home")
          }
          console.log(response.data)
        }).catch(error=>{
          toast.error("Wrong Credentials")
          console.log("Network Error",+error)
        })
}

return (
  <div className='container'>
   
<Form onSubmit={handleSubmit(onSubmit)}  className='col-md-4 offset-md-4 justify-content-center  fw-bold login px-4 py-0'>
<h3 className='text-center py-4'><b>Login to your account or register yourself if you dont have an account</b></h3>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
       <Form.Control type="email" placeholder="Enter email" {...register("email")} />
        <p className='text-danger'>{errors.email?.message}</p>
      </Form.Group>
      <Form.Group className="mb-4 mt-4" controlId="formBasicPassword">
     <Form.Control type="password" placeholder="Password" {...register("password")} />
        <p className='text-danger'>{errors.password?.message}</p>
      </Form.Group>
      <Button variant="primary" type="submit" className='loginbtn '>
       Login
      </Button>

    </Form>
  </div>
    
  );
}

export default Client;