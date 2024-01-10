 "use client"
 import axios from "axios"
 import { useEffect, useState } from "react"
 import Card from 'react-bootstrap/Card';

 function Sapprofileget(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/v1/sap-profile")
        .then((response)=>{
           console.log(response.data)
           setData(response.data)

        })
        .catch(error=>{
            console.log("Network ERROR",+error)
          })
    },[])
    return(
        <>
        <h1>SAP PROFILE GET ITEM</h1>
        {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card> */} 
     </>
    )
}
export default Sapprofileget