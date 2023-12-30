"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function Page() {
    const [privacy, setPrivacy] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/en/privacy_policy")
            .then(response => {
                console.log(response.data.data);
                setPrivacy(response.data.data);
            })
            .catch(error => {
                console.log("Network Error", error);
            });
    }, []);

    return (
        <div>
           {privacy?(
 <Card  >
 <Card.Body>
     <Card.Title dangerouslySetInnerHTML={{ __html: privacy?.title }}></Card.Title>
     <Card.Text dangerouslySetInnerHTML={{ __html: privacy?.description}}></Card.Text>
 </Card.Body>
</Card>

           ):
           <p>No data Found</p>}
                   
           
        </div>
    );
}

