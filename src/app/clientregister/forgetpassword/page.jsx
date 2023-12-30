"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../styles/style.css'
import { useFormContext } from '../FormContext/page';

const schema = yup.object().shape({
  email: yup.string().email().required()
});

function Client() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });

      const {formData,updateFormData}=useFormContext()
      const onSubmit=(data)=>{
        console.log(data)
        updateFormData(data)

      }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}  className='col-md-4 offset-md-4 justify-content-center mt-5 bg-info p-3'>
      <h2 className='text-center' >Forget password?</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
        <p className='text-danger'>{errors.email?.message}</p>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default Client