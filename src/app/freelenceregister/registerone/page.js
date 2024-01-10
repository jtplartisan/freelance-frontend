  "use client";
  import { Button, Col, Row } from "react-bootstrap";
  import Form from "react-bootstrap/Form";
  
  import { yupResolver } from "@hookform/resolvers/yup";
  import Link from "next/link";
  import { FormContext, useFormContext } from "../FormContext";
  import { useForm } from "react-hook-form"; 
  import * as yup from "yup";
  import { useContext } from 'react';

 const schema = yup.object().shape({
   country_id: yup
    .number()
    .typeError("Country ID must be a number") 
    .required("Country ID is required"),
   hear_about_us: yup.string().trim().required("Hear About Us is required"),
   english_proficiency: yup
    .string()
    .trim()
    .required("English Proficiency is required"),
 });

 function Registerone() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),  
  });
  
   const { setFormData,formData } =useContext(FormContext);
   const onSubmit = (data) => {
    const combinedFormData = { ...formData, ...data };
    setFormData(combinedFormData);
    console.log(combinedFormData);
  }

  return (
    <div className="col-md-6 offset-md-3 justify-content-center ">
      <Form className="forming p-3 m-5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center">Signup Your Account</h2>
        <p style={{ textAlign: "center" }}>Step 2/3</p>

        <Form.Group className="mb-3 mt-5" controlId="formGroupcountry_id">
          <Form.Label>country_id</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter country_id"
            {...register("country_id")}
          />
          <Form.Text className="text-danger">
            {errors.country_id?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGrouphear_about_us">
          <Form.Label>hear_about_us</Form.Label>
          <Form.Control
            type="text"
            placeholder="hear_about_us"
            {...register("hear_about_us")}
          />
          <Form.Text className="text-danger">
            {errors.hear_about_us?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupenglish_proficiency">
          <Form.Label>english_proficiency</Form.Label>
          <Form.Control
            type="text"
            placeholder="english_proficiency"
            {...register("english_proficiency")}
          />
          <Form.Text className="text-danger">
            {errors.english_proficiency?.message}
          </Form.Text>
        </Form.Group>

        <Col md={12}>
          <Link className="btn btn-primary" href="../freelenceregister">
            Previous Step
          </Link>
          <Button type="submit" className="btn btn-primary">
          Submit
          </Button>
          <Link className="btn btn-primary" href="../freelenceregister/registertwo">
          Next Step
          </Link>
        </Col>
      </Form>
    </div>
  );
}

export default Registerone;
