"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../styles/style.css'
import { useFormContext } from '../FormContext/page';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  password_confirmation: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function  Client() {
const { register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)});

const {updateFormData}=useFormContext()
const onSubmit=(data)=>{
        console.log(data)
        updateFormData(data)
      }
      
return (
    <Form onSubmit={handleSubmit(onSubmit)}  className='col-md-4 offset-md-4 justify-content-center mt-5 bg-info p-3'>
      <h2 className='text-center'>Reset password?</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
        <p className='text-danger'>{errors.email?.message}</p>
        <Form.Text className="text-muted">
          We ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")} />
        <p className='text-danger'>{errors.password?.message}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password_Confirmation</Form.Label>
        <Form.Control type="password" placeholder="Password"  {...register("password_confirmation")} />
        <p className='text-danger'>{errors.password_confirmation?.message}</p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Client;