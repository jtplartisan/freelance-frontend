"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/style.css'
import { useForm } from "react-hook-form";
import { Row,Col } from 'react-bootstrap';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import getterServices from '../../services/getter.service';
import {toast} from 'react-toastify'

const schema = yup.object().shape({
    full_name: yup.string().required(),
    business_email:yup.string().email().required(),
    phone:yup.string().min(10).max(10),
    job_title: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});

function BasicExample() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      })

      const onSubmit=(data)=>{
        console.log(data)
        getterServices.contact(data).then(res=>{
          console.log('test', res)
          toast.success("Thankyou")
          // setData(res.data.data.blog);
        }).catch(error=>{
          console.log(error)
        })
        // axios.post("http://localhost:8000/api/v1/contact",data).then(response=>{
        //     console.log(response)
        //     reset()
        // }).catch(error=>{
        //     console.log("Network Error",+error)
        // })
      }
      
      
  return (
    <div className='contactbc'>
   <div className='container'>
    <h1 className='text-center mt-2'>Contact Us</h1>
    <hr/>
    <Row>
      <Col>
    <Form onSubmit={handleSubmit(onSubmit)} className='justify-content-center mt-2 p-4 contact '>
        <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" {...register("full_name")} />
        <Form.Text className='text-danger'>{errors.full_name?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
        <Form.Label>Business_Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("business_email")} />
        <Form.Text className='text-danger'>{errors.business_email?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
        <Form.Label>Type</Form.Label>
        <Form.Select aria-label="Default select example" {...register("type")}>
      <option>Sales</option>
      <option>Support</option>
    </Form.Select>
        <Form.Text className='text-danger'>{errors.type?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Phone_No</Form.Label>
        <Form.Control type="number" placeholder="Enter your number" {...register("phone")} />
        <Form.Text className='text-danger'>{errors.phone?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text" placeholder="Enter job title" {...register("job_title")} />
        <Form.Text className='text-danger'>{errors.job_title?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter subject here" {...register("subject")} />
        <Form.Text className='text-danger'>{errors.subject?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea"  placeholder="Enter your message" {...register("message")} />
        <Form.Text className='text-danger'>{errors.message?.message}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className='contactbtn btn btn-dark'>
        Submit
      </Button>
    </Form>
    </Col>
    <Col className='p-3'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.780279692193!2d80.94386867531408!3d26.910467460187327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957e08e402eab%3A0x17fd43bae0f8ee2d!2sJamtech%20Technologies%20Pvt%20Ltd%20%7C%20Best%20IT%20Services%20Company%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1703831290045!5m2!1sen!2sin" width="600" height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Col>
    </Row>
    </div>
    </div>
  );
}

export default BasicExample;