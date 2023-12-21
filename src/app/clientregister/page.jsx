"use client"
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../styles/style.css'

function Client() {
  return (
    <div className='col-md-6 offset-md-3 justify-content-center '>
 <Form className='forming p-3 m-5' >
 <h2 className='text-center'>Signup Your Account</h2>
 <p style={{textAlign:"center"}}>Step 1/3</p>
 <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
        <Form.Label>First_Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Firstname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Last_Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Lastname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone_No</Form.Label>
        <Form.Control type="number" placeholder="Enter your number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Country_id</Form.Label>
        <Form.Control type="number" placeholder="Enter your country_id" />
      </Form.Group>
      <Button className='nextbtn' href='../clientregister/steptwo' >Next Step</Button>
    </Form>
</div>

  );
}

export default Client;