"use client"
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../styles/style.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from 'next/navigation';
import { useFormContext } from '../FormContext/page';
import { toast } from 'react-toastify'


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  password_confirmation: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
})

function Client() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter()
  const { formData, updateFormData } = useFormContext();

  const onSubmit = (data) => {
    const combinedFormData = { ...formData, ...data };
    updateFormData(combinedFormData);
    console.log(combinedFormData);
    toast('🦄 Second step completed!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    router.push('../../clientregister/stepthree')
  }

  return (
    <div className='col-md-6 offset-md-3 justify-content-center page mt-4'>
      {/* <p>Form data from Step One:</p>
      <pre>{JSON.stringify(formData)}</pre> */}
      <Form className='forming p-3 m-5' onSubmit={handleSubmit(onSubmit)} >
        <h2 className='text-center'>Signup Your Account</h2>
        <p className='fw-bold f-5 text-center'>Step 2/3</p>
        <Form.Group className="mb-3 mt-5 fw-bold" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...register("email")} />
          <Form.Text className='text-danger'>{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
          <Form.Label className='fw-bold'>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register("password")} />
          <Form.Text className='text-danger'>{errors.password?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
          <Form.Label>Confirm_Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Your Password" {...register("password_confirmation")} />
          <Form.Text className='text-danger'>{errors.password_confirmation?.message}</Form.Text>
        </Form.Group>
        <Col md={12} >
          <Button href='../../clientregister' style={{ marginLeft: "230px" }} className='btn btn-dark'>Previous</Button>{'      '}
          <input
            type="submit"
            className="btn btn-dark"
            value="Next Step"
            href='../../clientregister/stepthree'
          />
        </Col>
      </Form>
    </div>

  );
}

export default Client;
