"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Saptickets() {
   const [data, setData] = useState();

   useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/v1/ticket/sap/open-tickets", {
         headers: { Authorization: "Bearer " + localStorage.getItem('token') }
      }).then(response => {
         console.log(response.data);
         setData(response.data);
      }).catch(error => {
         console.error("API Error:", error);
      });
   }, []);

   function handleAcceptClick() {
      axios.post("http://127.0.0.1:8000/api/v1/ticket/sap/accept-job", {}, {
         headers: { Authorization: "Bearer " + localStorage.getItem('token') }
      }).then(response => {
         console.log(response.data);
         toast.success('Job accepted successfully!', { position: toast.POSITION.TOP_RIGHT });
      }).catch(error => {
         toast.error('Error accepting job!', {position: toast.POSITION.TOP_RIGHT});
         console.error("API Error:", error);
      });
   }

   function handleRejectClick() {
      axios.post("http://127.0.0.1:8000/api/v1/ticket/sap/reject-job", {}, {
         headers: { Authorization: "Bearer " + localStorage.getItem('token') }
      }).then(response => {
         console.log(response.data);
         toast.success('Job rejected successfully!', { position: toast.POSITION.TOP_RIGHT });
      }).catch(error => {
         toast.error('Error rejecting job!', { position: toast.POSITION.TOP_RIGHT });
         console.error("API Error:", error);
      });
   }

   return (
      <>
         <h1>Open Tickets For Sap</h1>
         <Button onClick={handleAcceptClick} variant="primary" size="lg">
            Accept button
         </Button>
         <Button onClick={handleRejectClick} variant="primary" size="lg">
            Reject button
         </Button>
         <ToastContainer />
      </>
   );
}

export default Saptickets;
