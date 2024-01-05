"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react"
import { CardText,Table } from "react-bootstrap";
import '../styles/style.css'

 function Aboutus(){
      const[data,setData]=useState([])
      useEffect(() => {
        axios
          .get("http://127.0.0.1:8000/api/v1/en/about")
          .then((response) => {
            setData(response.data.data.about);
            console.log(response.data.data.about,'hello')
            
          })
          .catch((error) => {
            console.error("Error fetching blog data:", error);
            setData([]);
          });
      }, []);
    

     return(
    <div className="aboutus">

    {
    data.length > 0 ? (
        data.map((item, i) => (
          <div key={i} >
           <h1  className="text-center mt-3 mb-2">{item.about_heading}</h1>
            <p className="p-5 f-5">{item.about_text}</p>
            <h1  className="text-center mt-5">{item.banner_heading}</h1>
            <p  className="text-center mt-5">{item.banner_text}</p>
            <h1  className="text-center mt-5 mb-5">Our Story</h1>
            <div className="aboutus">
      <Table>
      <thead className="aboutus">
        <tr className="text-center">
          <th>Year </th>
          <th>Title</th>
          <th>Description</th>
          <th>Page_link</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      {item.our_story.content.map((data, index) => (
        <tr key={index}>
          <td>{data.year}</td>
          <td>{data.title}</td>
          <td>{data.description}</td>
          <td>{data.link}</td>
          <td><Image src={data.image} width={100} height={100} alt="sample image"/></td>
        </tr>
           ))}
      </tbody>
</Table>
</div>
<h1  className="text-center mt-5 mb-5">Our Value</h1>
<Table striped bordered hover>
      <thead>
        <tr className="text-center">
        
          <th>Title</th>
          <th>Description</th>
          
        </tr>
      </thead>
      <tbody>
      {item.our_value.content.map((data, index) => (
        <tr key={index}>
         
          <td>{data.title}</td>
          <td>{data.description}</td>
      
        </tr>
           ))}
      </tbody>
</Table>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
   
    </div>
  );
}
    
export default Aboutus

