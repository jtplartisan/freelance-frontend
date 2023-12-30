"use client"
import  {useRouter}  from 'next/navigation';
import {Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../styles/style.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {toast} from 'react-toastify'
import axios from 'axios';

const schema = yup.object().shape({
 first_name: yup.string().required(),
 company_website: yup.string().required(),
 is_public_profile: yup.string().required(),
 linkedin_url:yup.string().required(),
 last_name: yup.string().required(),
 phone:yup.string().min(10).max(10),
 country_id:yup.string().required(),
 company_name: yup.string().required('Company name is required'),
 employee_strength: yup.number().required('Employee strength is required').positive().integer(),
});
function Client() {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });
const router=useRouter()


  const onSubmit=(data)=>{
    console.log(data)
  axios.post("http://localhost:8000/api/v1/client-profile/update-profile",data).then(response=>{
    console.log(response.data)
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
  }).catch(error=>{
  console.log("Please Check Your Network Connection",+error)
  })
  }
  return (
<div className='col-md-6 offset-md-3 justify-content-center'>
      <Form className=' p-3 m-2 ' onSubmit={handleSubmit(onSubmit)}>
 <h2 className='text-center'>Update Company profile</h2>
 <Form.Group className="mb-3 mt-4 " controlId="formGroupEmail" >
        <Form.Label className='fw-bold'>First_Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Firstname" {...register("first_name")} />
        <Form.Text className='text-danger fw-bold'>{errors.first_name?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Last_Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Lastname" {...register("last_name")}/>
        <Form.Text className='text-danger'>{errors.last_name?.message}</Form.Text>
      </Form.Group>
      <Form.Group>
      <Form.Label>Gender</Form.Label>
      <Form.Select aria-label="Default select example"  {...register("gender")}>
    <option >Male</option>
      <option >FeMale</option>
      <option >Other</option>
    </Form.Select>
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
      <Form.Group>
      <Form.Label>Public Profile</Form.Label>
      <Form.Select aria-label="Default select example"  {...register("is_public_profile")}>
    <option >True</option>
      <option >False</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 mt-4 " controlId="formGroupEmail" >
        <Form.Label className='fw-bold'>Linkedlin_URL</Form.Label>
        <Form.Control type="url" placeholder="" {...register("linkedin_url")} />
        <Form.Text className='text-danger fw-bold'>{errors.first_name?.message}</Form.Text>
      </Form.Group>
      <Form.Group className='mb-3 fw-bold' controlId='formGroupPassword'>
          <Form.Label>Company_Name</Form.Label>
          <Form.Control type='text' placeholder='Password' {...register('company_name')} />
          <Form.Text className='text-danger'>{errors.company_name?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 fw-bold' controlId='formGroupPassword'>
          <Form.Label>Company_Website</Form.Label>
          <Form.Control type='url' placeholder='Password' {...register('company_website')} />
          <Form.Text className='text-danger'>{errors.company_website?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 fw-bold' controlId='formGroupPassword'>
          <Form.Label>Employee_strength</Form.Label>
          <Form.Control type='number' placeholder='' {...register('employee_strength')} />
          <Form.Text className='text-danger'>{errors. employee_strength?.message}</Form.Text>
        </Form.Group>
      <Col  md={12}>
      <input
                    type="submit"
                    className="nextbtn btn btn-dark"
                    value="Next Step"
                  />
      </Col>   
    </Form>

 
</div>

  );
}

export default Client;