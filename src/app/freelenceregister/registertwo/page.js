"use client";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../styles/style.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext } from 'react';
import { FormContext } from "../FormContext";
const validationSchema = Yup.object().shape({
  primary_skills: Yup.string().required("Primary Skills is required"),
  main_reason_for_applying: Yup.string().required(
    "Main Reason for Applying is required"
  ),
});

function Registertwo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { setFormData,formData } =useContext( FormContext );


   const onSubmit = (data) => {
    const combinedFormData = { ...formData, ...data };
    setFormData(combinedFormData);

     console.log(combinedFormData);
      const freelencerdata = {
      email:combinedFormData.email, 
      password:combinedFormData.password, 
      password_confirmation:combinedFormData.confirmpassword,
      first_name:combinedFormData.firstname,
      last_name:combinedFormData.lastname,
      phone:combinedFormData.number,
      country_id:combinedFormData.country_id,
      hear_about_us:combinedFormData.hear_about_us,
      english_proficiency:combinedFormData.english_proficiency,
      primary_skills:combinedFormData.primary_skills,
      main_reason_for_applying: combinedFormData.main_reason_for_applying,
     };

     axios.post("http://localhost:8000/api/v1/auth/signUpAsFreelancer",freelencerdata).then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log("Network ERROR",+error)
    })
    }
  

  return (
    <div className="col-md-6 offset-md-3 justify-content-center ">
      <Form className="forming p-3 m-2" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center">Signup Your Account</h2>
        <p style={{ textAlign: "center" }}>Step 3/3</p>
        <Form.Group className="mb-3 mt-5" controlId="formGroupprimary_skills">
          <Form.Label>Primary Skills</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Primary Skills"
            {...register("primary_skills")}
          />
          <p className="text-danger">{errors.primary_skills?.message}</p>
        </Form.Group>
        <Form.Group
        className="mb-3"
        controlId="formGroupmain_reason_for_applying"
        >
          <Form.Label>Main Reason for Applying</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Main Reason for Applying"
            {...register("main_reason_for_applying")}
          />
          <p className="text-danger">
           {errors.main_reason_for_applying?.message}
          </p>
        </Form.Group>
        <Col md={12}>
           <Link
            className="btn btn-primary"
            href="../freelenceregister/registerone"
          >
            Previous Step
          </Link>
           <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Form>
    </div>
  );
}

export default Registertwo;
