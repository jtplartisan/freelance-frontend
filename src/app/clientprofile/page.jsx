"use client"
import React,{useEffect,useState} from 'react'
import { Card ,Button} from 'react-bootstrap'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import '../styles/style.css'
import { CgProfile } from "react-icons/cg";

export default function page() {
  const[data,setData]=useState([])
  const router=useRouter()
useEffect(()=>{
axios.get("http://127.0.0.1:8000/api/v1/client-profile", {
  headers: { Authorization: "Bearer " + localStorage.getItem('token') }
}).then(response=>{
console.log(response.data.data,"client data")
  setData(response.data.data)
}).catch(error=>{
  console.log("Network Error",+error)
})
  },[])

return (
    <div className='clientprofile'>
    
        <Card className='profile' >
     
      <Card.Body>
        <Card.Title className='text-center'>  <h1><CgProfile /> Profile</h1></Card.Title>
      
        <Card.Text><b>First Name :</b>{'                  '}
          {data.firstName}
        </Card.Text>
        <Card.Text><b>Last Name :</b>
          {data.lastName}
        </Card.Text>
        <Card.Text><b>Full Name :</b>{'                  '}
          {data.fullName}
        </Card.Text>
        <Card.Text><b>Uid :</b>{'                  '}
          {data.uid}
        </Card.Text>
        <Card.Text><b>Gender :</b>
          {data.gender
}
        </Card.Text>
        <Card.Text><b>Contact Number  :</b>
          {data.contactNumber
}
        </Card.Text>
        <Card.Text><b>Country  :</b>
          {data.country
}
        </Card.Text>
        <Card.Text><b>about Me  :</b>
          {data.aboutMe
}
        </Card.Text>
        <Card.Text><b>public Profile  :</b>
          {data.isPublicProfile}
        </Card.Text>
        
        <Card.Text><b>Link:</b>
          {data.linkInUrl
}
        </Card.Text>
        <Card.Text><b>Company Website :</b>
          {data.companyWebsite
}
        </Card.Text>
        <Card.Text><b>Employee Strength :</b>
          {data.employeeStrength

}
        </Card.Text>
        <Button variant="primary" onClick={()=>router.push('../clientprofile/updateprofile')} className='profilebtn' >Update Profile</Button>
      </Card.Body>
    </Card>

         
    </div>
  )
}
