"use client"
import { useRouter } from 'next/navigation';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { nanoid } from 'nanoid';

const schema = yup.object().shape({
    subject: yup.string().required(),
    ticket_body: yup.string().required(),
    priority_id: yup.string().required(),
    sub_status_id: yup.string().required()
})

function Client() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const router = useRouter()
    const token = nanoid()
  
    console.log(token,"Checking token")

    const onSubmit = (data) => {
        console.log(data)
        axios.post("http://127.0.0.1:8000/api/v1/ticket/client/create-ticket", data ,  { headers: { Authorization: "Bearer " + token } }
        ).then(response => {
                    console.log(response)
                })
      .catch((error) => {
          console.log(error);
          
          });
    }
 return (
        <div className='col-md-6 offset-md-3 justify-content-center'>
            <Form className=' p-3 m-5 ' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-center'>Create ticket</h2>
                <Form.Group className="mb-3 mt-5 " controlId="formGroupEmail" >
                    <Form.Label className='fw-bold'>Subject</Form.Label>
                    <Form.Control type="text" placeholder="" {...register("subject")} />
                    <Form.Text className='text-danger fw-bold'>{errors.subject?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>Priority_id</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("priority_id")}>
                        <option value="low">Low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                        <option value="high">higher</option>
                    </Form.Select>
                    <Form.Text className='text-danger'>{errors.priority_id?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>SubStatus_id</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("sub_status_id")}>
                        <option>1</option>
                        <option >2</option>
                    </Form.Select>
                    <Form.Text className='text-danger'>{errors.sub_status_id?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>Ticket_Description</Form.Label>
                    <Form.Control type="text" placeholder="" {...register("ticket_body")} />
                    <Form.Text className='text-danger'>{errors.ticket_body?.message}</Form.Text>
                </Form.Group>
                <Col md={12}>
                    <input
                        type="submit"
                        className="nextbtn btn btn-dark"
                        value="Create"
                    />
                </Col>
            </Form>

        </div>

    );
}

export default Client;