"use client"
import { useRouter } from 'next/navigation';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../styles/style.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'

const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  linkedin_url: yup.string().required(),
  phone: yup.string().min(10).max(10),
  country_id: yup.string().required(),
  company_name: yup.string().required('Company name is required'),
  employee_strength: yup.number().required('Employee strength is required').positive().integer(),
  company_website: yup.string().required()
});
function Client() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter()
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/client-profile", {
      headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    }).then(response => {
      console.log(response.data.data)
      setData(response.data.data)
      setValue("first_name", response.data.data.firstName),
        setValue("last_name", response.data.data.lastName),
        setValue("phone", response.data.data.contactNumber)
      setValue("country_id", response.data.data.country),
        setValue("company_website", response.data.data.companyWebsite);
      setValue("linkedin_url", response.data.data.linkInUrl);
      setValue("company_name", response.data.data.companyName)
      setValue("gender", response.data.data.gender)
      setValue("is_public_profile", response.data.data.isPublicProfile)
      setValue("employee_strength", response.data.data.employeeStrength)
    }).catch(error => {
      console.log("Network Error", +error)
    })
  }, [])

  const onSubmit = (data) => {
    console.log(data)
    axios.post("http://127.0.0.1:8000/api/v1/client-profile/update-company-profile", data
      , {
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
      }
    ).then(response => {
      console.log(response.data, "checking")
      toast.success("Profile Updated Successfully")
      router.push('../clientprofile')
    }).catch(error => {
      toast.error("Failed to update profile")
      console.log("Network error", +error)
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
          <Form.Control type="text" placeholder="Enter Your Lastname" {...register("last_name")} />
          <Form.Text className='text-danger'>{errors.last_name?.message}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label="Default select example" {...register("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
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
          <Form.Select aria-label="Default select example" {...register("is_public_profile")}>
            <option value="true">True</option>
            <option value="false">False</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 mt-4 " controlId="formGroupEmail">
          <Form.Label className='fw-bold'>Linkedlin_URL</Form.Label>
          <Form.Control type="url" placeholder="" {...register("linkedin_url")} />
          <Form.Text className='text-danger'>{errors.linkedin_url?.message}</Form.Text>
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
          <Form.Text className='text-danger'>{errors.employee_strength?.message}</Form.Text>
        </Form.Group>
        <Col md={12}>
          <input
            type="submit"
            className="nextbtn btn btn-dark"
            value="Update"
          />
        </Col>
      </Form>


    </div>

  );
}

export default Client;