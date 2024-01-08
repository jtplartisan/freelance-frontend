"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Col, Table, Card, Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import '../../styles/style.css'

const schema = yup.object().shape({
    subject: yup.string().required(),
    ticket_body: yup.string().required(),
    priority_id: yup.string().required(),
    sub_status_id: yup.string().required()
});

function Client() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const router = useRouter();
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (data) => {
        console.log(data);
        data.priority_id = parseInt(data.priority_id)
        data.sub_status_id = parseInt(data?.sub_status_id)
        axios.post("http://127.0.0.1:8000/api/v1/ticket/client/create-ticket", data, {
            headers: { Authorization: "Bearer " + localStorage.getItem('token') }
        }).then(response => {
            console.log(response);
            toast.success("Ticket created successfully")
        }).catch((error) => {
            console.log(error)
        });
    };

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/ticket/client/my-tickets/2}", {
            headers: { Authorization: "Bearer " + localStorage.getItem('token') }
        }).then(response => {
            console.log(response.data.data.tickets, "mahi")
            setData(response.data.data.tickets)
        })
    }, [])

    return (
        <div className='col-md-6 offset-md-3 justify-content-center'>
            <Button  onClick={handleShow} style={{ marginLeft: "320px"}} className='mt-5 mb-5 addtkt'>
                Add Ticket
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>Create Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='  ' onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3  " controlId="formGroupEmail" >
                            <Form.Label className='fw-bold'>Subject</Form.Label>
                            <Form.Control type="text" placeholder="" {...register("subject")} />
                            <Form.Text className='text-danger fw-bold'>{errors.subject?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                            <Form.Label>Priority_id</Form.Label>
                            <Form.Select aria-label="Default select example" {...register("priority_id")}>
                                <option value={1}>Low</option>
                                <option value={1}>Medium</option>
                                <option value={1}>High</option>
                                <option value={1}>Higher</option>
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
                        <Col md={12} style={{ marginLeft:"100px"}}>
                            <input
                                type="submit"
                                className="nextbtn btn btn-dark"
                                value="Create"
                            />
                        </Col>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <hr />
            <h2 className='text-center mt-5 mb-4'>Tickets List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Ticket_Id</th>
                        <th>First Name</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ? (
                            data.map((item, i) => (
                                <tr key={i} >
                                    <td>{item.id}</td>
                                    <td>{item.body}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    <td><Button onClick={() => router.push("../../tickets/craete/ticketdetails/" + item.uid)}>Show More</Button></td>
                                    <td><Button onClick={() => router.push("../../tickets/craete/updateticket/" + item.uid)}>Update ticket</Button></td>
                                </tr>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                </tbody>
            </Table>
        </div>
    );
}
export default Client;
