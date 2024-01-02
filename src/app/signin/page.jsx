"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../styles/style.css'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required()
});

function  Client() {
const { register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)});
const router=useRouter()

const onSubmit=(data)=>{
        console.log(data)
        axios.post("http://localhost:8000/api/v1/auth/signIn",data).then(response=>{
          localStorage.setItem('token' , response?.data?.data?.token)
          if(response.data.data.role == "client"){
            router.push("../tickets")
          }
          else if(response.data.data.role == "user"){
router.push("../home")
          }
          console.log(response.data)
        }).catch(error=>{
          console.log("Network Error",+error)
        })
}
return (
  <div className='container'>
    <h1 className='text-center mt-5'>Login</h1><hr/>
<Form onSubmit={handleSubmit(onSubmit)}  className='col-md-6 offset-md-3 justify-content-center  fw-bold login p-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
        <p className='text-danger'>{errors.email?.message}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")} />
        <p className='text-danger'>{errors.password?.message}</p>
      </Form.Group>
      <Button variant="primary" type="submit" className='loginbtn tbn btn-dark text-light'>
        Submit
      </Button>
    </Form>
  </div>
    
  );
}

export default Client;