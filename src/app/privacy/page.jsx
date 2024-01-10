"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import '../styles/style.css'
import getterServices from '../../services/getter.service';
import Menubar from '../home/Menubar';

export default function Page() {
    const [privacy, setPrivacy] = useState([]);

    useEffect(() => {
       getterServices.privacy()
            .then(response => {
                console.log(response.data.data);
                setPrivacy(response.data.data);
            })
            .catch(error => {
                console.log("Network Error", error);
            });
    }, []);

    return (
        <div >
            <Menubar/>
           {privacy?(
 <Card className='privacy mt-2'>
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

