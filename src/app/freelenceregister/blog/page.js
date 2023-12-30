 "use client";
 import axios from "axios";
 import { useEffect, useState } from "react";
 import Card from "react-bootstrap/Card";

function Blog() {
const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/en/latest-blog")
      .then((response) => {
         setData(response.data.data.blog);
         console.log(response.data.data.blog,'hello')
        
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setData([]);
      }); 
  }, []);

  return (
    <>
      {
      data.length > 0 ? (
        data.map((item, i) => (
          <Card key={i} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.bannerImage} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.UpdatedTime}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}
export default Blog;
