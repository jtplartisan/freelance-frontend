'use client'
 import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
 import InputGroup from 'react-bootstrap/InputGroup';
 import { useForm } from "react-hook-form";
 import {toast}  from 'react-toastify'
 
 import axios from 'axios'; 
function Sapprofile(){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      const clientdata={
            about_me:data.about_me,
            primary_skills:data.primary_skills,
            linkedin_url:data.linkedin_url,
            daily_rate:data.daily_rate,
            hourly_rate:data.hourly_rate,
            office_location:data.office_location,
            job_type:data.job_type,
            languages:data.languages,
            is_profile_public:data.is_profile_public

           }
          console.log(clientdata,"hello client")
           axios.post("http://localhost:8000/api/v1/update-profile",clientdata)
          .then(response=>{
            console.log(response)
          }).catch(error=>{
            console.log("Network ERROR",+error)
          })
        }
    return(
     <>
         <h1>sap profile page</h1>
        <Form  onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicAboutme">
        <Form.Label>About Me</Form.Label>
        <Form.Control as="textarea" rows={3} {...register("about_me")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrimaryskills">
        <Form.Label>Primary Skills</Form.Label>
        <Form.Control type="text" placeholder="Enter text" {...register("primary_skills")} />
      </Form.Group>

      <Form.Label htmlFor="basic-url">Your Linkedin URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" {...register("linkedin_url")}  />
      </InputGroup>
      <Form.Group className="mb-3" controlId="formBasicDailyrate">
        <Form.Label>Daily Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter daily rate" {...register("daily_rate")} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicHourlyrate">
        <Form.Label>Hourly Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter hourly rate" {...register("hourly_rate")} />
        
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formGridOfficeLocation">
        <Form.Label>Office Location</Form.Label>
        <Form.Control placeholder="1234 Main St" {...register("office_location")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridJobType">
        <Form.Label>Job Type</Form.Label>
        <Form.Control placeholder="job type" {...register("job_type")} />
      </Form.Group>
      <Form.Label>Language</Form.Label>
      <Form.Select aria-label="Default select example" {...register("languages")}>
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
     
    </Form.Select>
    <Form.Group className="mb-3" controlId="formBasicIsProfilePublic">
       <Form.Check type="checkbox" label="Make Profile Public"  {...register("is_profile_public")} />
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        
        </>
    )
}
export default Sapprofile