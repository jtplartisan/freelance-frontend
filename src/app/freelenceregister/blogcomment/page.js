"use client"
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';  
import { useForm } from "react-hook-form";

function Blogcomment(){

      const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
      axios.post("http://localhost:8000/api/v1/blog-comment/create-comment",data)
          .then((response) => {
           alert("Data submitted");
            console.log(response.data);
     });
      }
    return (
        <>
          <h1 className='text-center'>
            Create Blog Comment page
            </h1>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="enter name"  {...register("name")}
 />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3}  {...register("comment")}
 />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                </div>
                <div className='col-sm-4'></div>

            </div>

        </div>
      

        </>
     

    )
}
export default Blogcomment