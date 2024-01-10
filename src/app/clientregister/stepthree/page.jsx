"use client"
 import { Button, Col, Row } from 'react-bootstrap';
 import Form from 'react-bootstrap/Form';
 import '../../styles/style.css';
 import { useForm } from 'react-hook-form';
 import { yupResolver } from '@hookform/resolvers/yup';
 import * as yup from 'yup';
 import  {useRouter}  from 'next/navigation';
 import { useFormContext } from '../FormContext/page';
 import {toast} from 'react-toastify'
import clientServices from '../../../services/client.services';

 const schema = yup.object().shape({
   hear_about_us: yup.string().required('Hear about us is required'),
   company_name: yup.string().required('Company name is required'),
   employee_strength: yup.number().required('Employee strength is required').positive().integer(),
   service_needed: yup.string().required('Service needed is required'),
   hire_remote: yup.string().required('Hire remote is required'),
   how_to_meet: yup.string().required('How to meet is required'),
 })

 function Client() {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const { formData, updateFormData } = useFormContext();

  const router=useRouter()
  const onSubmit = (data) => {
  toast('Successfully Registered!', {
     position: "top-right",
     autoClose: 3000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
    });
   router.push('../../signin')
   const combinedFormData = { ...formData, ...data };
   updateFormData(combinedFormData);
   console.log(combinedFormData)
   const clientdata={
    email: combinedFormData.email,
    password:combinedFormData.password,
    password_confirmation: combinedFormData.password_confirmation,
    first_name:combinedFormData.first_name,
    last_name:combinedFormData.last_name,
    phone:combinedFormData.phone,
    country_id:combinedFormData.country_id,
    hear_about_us:combinedFormData.hear_about_us,
    company_name:combinedFormData.company_name,
    employee_strength: combinedFormData. employee_strength,
    service_needed:combinedFormData.service_needed,
    hire_remote: combinedFormData.hire_remote,
    how_to_meet:combinedFormData.how_to_meet
  }
  console.log(clientdata,"hello client")
  //  axios.post("http://localhost:8000/api/v1/auth/signUpAsClient",clientdata)
clientServices.clientSignup(clientdata)
  .then(response=>{
    console.log(response)
  }).catch(error=>{
    console.log("Network ERROR",+error)
  })
  }
  return (
    <div className='col-md-6 offset-md-3 justify-content-center page mt-3'>
      <Form className='forming p-3 m-2' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-center'>Signup Your Account</h2>
        <p className='fw-bold f-5 text-center'>Step 3/3</p>
        <Form.Group className='mb-3 mt-5' controlId='formGroupEmail'>
          <Form.Label className='fw-bold'>Hear_about_us</Form.Label>
          <Form.Control type='text' placeholder='' {...register('hear_about_us')} />
          <Form.Text className='text-danger'>{errors.hear_about_us?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Company_Name</Form.Label>
          <Form.Control type='text' placeholder='Password' {...register('company_name')} />
          <Form.Text className='text-danger'>{errors.company_name?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Employee_strength</Form.Label>
          <Form.Control type='number' placeholder='' {...register('employee_strength')} />
          <Form.Text className='text-danger'>{errors. employee_strength?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Service_needed</Form.Label>
          <Form.Select aria-label='Default select example' {...register('service_needed')}>
            <option>No</option>
            <option>Yes</option>
          </Form.Select>
          <Form.Text className='text-danger'>{errors.service_needed?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Hire_Remote</Form.Label>
          <Form.Control type='text' placeholder='' {...register('hire_remote')} />
          <Form.Text className='text-danger'>{errors.hire_remote?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>How_to_meet</Form.Label>
          <Form.Control type='text' placeholder='' {...register('how_to_meet')} />
          <Form.Text className='text-danger'>{errors.how_to_meet?.message}</Form.Text>
        </Form.Group>
        <Col>
          <Button href='../../clientregister/steptwo' style={{ marginLeft: '280px' }} className='btn btn-dark'>
            Previous 
          </Button>{' '}
          <input type='submit' className='btn btn-dark' value='Save' />
        </Col>
      </Form>
    </div>
  );
}

export default Client;
