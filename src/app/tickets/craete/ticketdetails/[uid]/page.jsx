"use client"
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import '../../../../styles/style.css'

export default function Page() {
  const [details, setDetails] = useState({});
  const { uid } = useParams();
  console.log({ uid }, "checking uid");

  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8000/api/v1/ticket/client/get-single-ticket?uid=${uid}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
      })
      .then(response => {
        console.log(response.data.data, "ticket details");
        setDetails(response.data.data);
      })
      .catch(error => {
        console.error("Network error", error);
      });
  }, [uid])

  return (
    <div className='ticketdetails'>
      <h1 className='text-center pb-5'>Ticket Details</h1>
      {details &&
        <Card className='details'>
          <Card.Body>
            <b>Uid</b><Card.Text>{details.uid}</Card.Text>
            <b>Subject</b><Card.Text>{details.subject}</Card.Text>
            <b>Body</b>  <Card.Text>{details.body}</Card.Text>
            <b>Assign to </b>  <Card.Text>{details.assignTo}</Card.Text>
            {/* <b>Priority </b>  <Card.Text>{details.priority.name}</Card.Text> */}
            <b>Created </b>  <Card.Text>{details.createdAt}</Card.Text>
            <b>Updated </b>  <Card.Text>{details.updatedAt}</Card.Text>
          </Card.Body>
        </Card>
      }
    </div>
  );
}
