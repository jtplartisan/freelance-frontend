"use client"
import axios from 'axios';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
function Singleticket(){
    const[data,setData]=useState()
    axios.get('/api/v1/ticket/client/get-single-ticket')
    .then((response)=>{
        setData(response.data)
  })

  return(
        <>
        <h1>Single Ticket</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
        </>

    )
}
export default Singleticket