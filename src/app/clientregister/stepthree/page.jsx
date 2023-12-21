"use client"
import { Button ,Col,Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../styles/style.css'

function Client() {
  return (
    <div className='col-md-6 offset-md-3 justify-content-center '>
 <Form className='forming p-3 m-2' >
 <h2 className='text-center'>Signup Your Account</h2>
 <p style={{textAlign:"center"}}>Step 3/3</p>
 <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
        <Form.Label>Hear_about_us</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Company_Name</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Employee_strength</Form.Label>
        <Form.Control type="number" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Service_needed</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>No</option>
      <option>Yes</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Hire_Remote</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>How_to_meet</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Col md={12} >
      <Button  href='../../clientregister/steptwo' style={{marginLeft:"180px"}}>Previous Step</Button>{'      '}
    
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Save"
                  />
                </Col>
    </Form>
</div>
  );
}

export default Client;
