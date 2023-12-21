"use client"
import { Button,Col,Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../styles/style.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  password_confirmation: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function Client() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit=(data)=>{
        console.log(data)
    }

  return (
    <div className='col-md-6 offset-md-3 justify-content-center '>
 <Form className='forming p-3 m-5' onSubmit={handleSubmit(onSubmit)} >
 <h2 className='text-center'>Signup Your Account</h2>
 <p style={{textAlign:"center"}}>Step 2/3</p>
 <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
        <Form.Text className='text-danger'>{errors.email?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")} />
      <Form.Text className='text-danger'>{errors.password?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Confirm_Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Your Password" {...register("password_confirmation")}/>
        <Form.Text className='text-danger'>{errors.password_confirmation?.message}</Form.Text>
      </Form.Group>
      <Col md={12} >
      <Button  href='../../clientregister' style={{marginLeft:"180px"}}>Previous Step</Button>{'      '}
    
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Next Step"
                  />
                </Col>
    </Form>
</div>

  );
}

export default Client;
