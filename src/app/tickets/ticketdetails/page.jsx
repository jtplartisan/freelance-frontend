import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Page() {
  const [details, setDetails] = useState({});
  const { uid } = useParams();
  console.log(uid, "checking uid");

  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/v1/ticket/client/get-single-ticket/${uid}`, {
  //       headers: { Authorization: "Bearer " + localStorage.getItem('token') }
  //     })
  //     .then(response => {
  //       console.log(response.data.data, "ticket details");
  //       setDetails(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error("Network error", error);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/ticket/client/get-single-ticket")
      .then(response => {
        console.log(response.data, "ticket details");
        setDetails(response.data.data);
      })
      .catch(error => {
        console.error("Network error", error);
      });
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>{details.uid}</Card.Text>
          <Card.Text>{details.id}</Card.Text>
          <Card.Text>{details.subject}</Card.Text>
          <Card.Text>{details.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
