"use client"

import Form from 'react-bootstrap/Form';
import '../styles/style.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//import { useFormContext } from './FormContext';

import { FormContext, useFormContext } from './FormContext';
import Link from 'next/link'; 

import * as yup from 'yup'; 
import { useContext } from 'react';


   const schema = yup.object().shape({
    email: yup.string().trim().email('Invalid email address').required('Email is required'),
    password: yup.string().trim().required('Password is required'),
    confirmpassword: yup.string().trim().oneOf([yup.ref('password'), null], 'Passwords must match'),
    firstname: yup.string().trim().matches(/^[A-Za-z]+$/, 'Only letters are allowed').required('First Name is required'),
    lastname: yup.string().trim().matches(/^[A-Za-z]+$/, 'Only letters are allowed').required('Last Name is required'),
    number: yup.number().typeError('Phone number must be a number').required('Phone number is required'),
  });
  
function Freelanceregister() {
const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });
      const { setFormData,formData } =useContext(FormContext);


  console.log(formData); 
  const onSubmit = (data) => {

    setFormData(data);
   }
   return (
 
    <div className='col-md-6 offset-md-3 justify-content-center '>
 <Form className='forming p-3 m-5' >
 <h2 className='text-center'>Signup Your Account</h2>
 <p style={{textAlign:"center"}}>Step 1/3</p>
 <Form.Group className='mb-3' controlId='formBasicEmail'>
  <Form.Label>Email address</Form.Label>
  <Form.Control type='email' placeholder='Enter email' {...register('email')} />
  <Form.Text className='text-danger'>{errors.email?.message}</Form.Text>
</Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  {...register("password")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="confirm password" placeholder="Confirm Password"  {...register("confirmpassword")} />
      </Form.Group>
     <Form.Group className="mb-3 " controlId="formFirst_Name">
        <Form.Label>First_Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Firstname" {...register("firstname")}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Last_Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Lastname" {...register("lastname")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone_No</Form.Label>
        <Form.Control type="number" placeholder="Enter your number" {...register("number")} />
      </Form.Group>
    <Link href='../freelenceregister/registerone'>
  <div className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Submit</div>
</Link>
<Link href='/freelenceregister/registerone'>
          <div className="btn btn-primary">Next Step</div>
        </Link>

    </Form>
</div>

 );
}

export default Freelanceregister;