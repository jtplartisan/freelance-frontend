"use client"
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import '../../../../styles/style.css'
import { toast } from 'react-toastify'

const schema = yup.object().shape({
    subject: yup.string().required(),
    ticket_body: yup.string().required(),
    priority_id: yup.string().required(),
    sub_status_id: yup.string().required(),
    created_at: yup.string().required(),
    updated_at: yup.string().required(),
    status_id: yup.string().required(),
    creator_id: yup.string().required(),
    ticket_body: yup.string().required(),
});

function Client() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema),
    })

    const router = useRouter()
    const { uid } = useParams()
    const [data, setData] = useState([])

    const onSubmit = (data) => {
        console.log(data);
        axios.post(`http://127.0.0.1:8000/api/v1/ticket/client/ticket-update/${uid}`, data,{
            headers: { Authorization: "Bearer " + localStorage.getItem('token') } 
        }).then(response => {
            console.log(response, "updating")
            toast.success("Ticket Updated Successfully")
            // router.push("../../../../tickets/craete")
        }).catch(error => {
            console.log("Network error", +error)
        })
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/ticket/client/get-single-ticket?uid=${uid}`, {
            headers: { Authorization: "Bearer " + localStorage.getItem('token') }
        }).then(response => {
            console.log(response.data.data, "checking token")
            setData(response.data.data)
            setValue("subject", response.data.data.subject)
            setValue("ticket_body", response.data.data.body)
            setValue("created_at", response.data.data.createdAt)
            setValue("uid",response.data.data.uid)
            setValue("updated_at", response.data.data.updatedAt)
        })
    }, [])

    return (
        <div className='col-md-6 offset-md-3 justify-content-center updatetkt'>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formGroupEmail" >
                    <Form.Label className='fw-bold'>Uid</Form.Label>
                    <Form.Control type="text" placeholder="" {...register("uid")} />
                    <Form.Text className='text-danger fw-bold'>{errors.uid?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail" >
                    <Form.Label className='fw-bold'>Subject</Form.Label>
                    <Form.Control type="text" placeholder="" {...register("subject")} />
                    <Form.Text className='text-danger fw-bold'>{errors.subject?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>Priority</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("priority_id")}>
                        <option >Low</option>
                        <option >Medium</option>
                        <option >High</option>
                        <option >Higher</option>
                    </Form.Select>
                    <Form.Text className='text-danger'>{errors.priority_id?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>SubStatus_id</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("sub_status_id")}>
                        <option >1</option>
                        <option >2</option>
                    </Form.Select>
                    <Form.Text className='text-danger'>{errors.sub_status_id?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>Status_id</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("status_id")}>
                        <option >1</option>
                        <option >2</option>
                    </Form.Select>
                    <Form.Text className='text-danger'>{errors.status_id?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>Created_Id</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("creator_id")}>
                        <option >1</option>
                        <option >2</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formGroupEmail" >
                    <Form.Label className='fw-bold'>Ticket_Body</Form.Label>
                    <Form.Control type="text" placeholder="" {...register("ticket_body")} />
                    <Form.Text className='text-danger fw-bold'>{errors.ticket_body?.message}</Form.Text>
                </Form.Group>
                    <Form.Text className='text-danger'>{errors.creator_id?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>Created</Form.Label>
                    <Form.Control type="text" placeholder="" {...register("created_at")} />
                    <Form.Text className='text-danger'>{errors.created_at?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupPassword">
                    <Form.Label>Updated</Form.Label>
                    <Form.Control type="text" placeholder="" {...register("updated_at")} />
                    <Form.Text className='text-danger'>{errors.updated_at?.message}</Form.Text>
                </Form.Group>
                <Col>
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

