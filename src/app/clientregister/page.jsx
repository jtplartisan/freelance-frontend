"use client"
import  {useRouter}  from 'next/navigation';
import {Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../styles/style.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormContext ,FormProvider} from '../clientregister/FormContext/page'
import {toast} from 'react-toastify'

const schema = yup.object().shape({
 first_name: yup.string().required(),
 last_name: yup.string().required(),
 phone:yup.string().min(10).max(10),
 country_id:yup.string().required()
});
function Client() {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });
const router=useRouter()
const {formData,updateFormData}=useFormContext()

  const onSubmit=(data)=>{
    console.log(data)
    updateFormData(data)
    toast('🦄 First step completed!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   router.push('../clientregister/steptwo')
  }
  return (
<div className='col-md-6 offset-md-3 justify-content-center page'>
      <FormProvider>
      <Form className=' p-3 m-5 ' onSubmit={handleSubmit(onSubmit)}>
 <h2 className='text-center'>Signup Your Account</h2>
 <p className='text-center fw-bold f-5'>Step 1/3</p>
 <Form.Group className="mb-3 mt-5 " controlId="formGroupEmail" >
        <Form.Label className='fw-bold'>First_Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Firstname" {...register("first_name")} />
        <Form.Text className='text-danger fw-bold'>{errors.first_name?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Last_Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Lastname" {...register("last_name")}/>
        <Form.Text className='text-danger'>{errors.last_name?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Phone_No</Form.Label>
        <Form.Control type="number" placeholder="Enter your number" {...register("phone")} />
        <Form.Text className='text-danger'>{errors.phone?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Country_id</Form.Label>
        <Form.Control type="number" placeholder="Enter your country_id" {...register("country_id")} />
        <Form.Text className='text-danger'>{errors.country_id?.message}</Form.Text>
      </Form.Group>
      <Col  md={12}>
      <input
                    type="submit"
                    className="nextbtn btn btn-dark"
                    value="Next Step"
                  />
      </Col>   
    </Form>
      </FormProvider>
 
</div>

  );
}

export default Client;