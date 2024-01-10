"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default function page() {
    const [status, setStatus] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/ticket/client/created-ticket-status", {
            headers: { Authorization: "Bearer " + localStorage.getItem('token') }
        }).then(response => {
            console.log(response.data.data, "status")
            setStatus(response.data.data)
        }).catch(error => {
            console.log("Network Error", +error)
          
        })
    }, [])

    return (
        <div className='container' style={{backgroundColor:"blue",marginTop:"200px",height:"200px"}}>
            <h1 className='text-center mt-4 mb-5 text-light'>Ticket Status</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Open Ticket</th>
                        <th>In process Ticket</th>
                        <th>OnHold Ticket</th>
                        <th>Solved Ticket</th>
                        <th>Not assigned Ticket</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{status.open_ticket}</td>
                        <td> {status.in_process_ticket}  </td>
                        <td> {status.on_hold_ticket}</td>
                        <td> {status.solved_ticket
                        }  </td>
                        <td> {status.not_assigned_ticket
                        }</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}