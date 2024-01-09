"use client"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/style.css'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import img from '../styles/cognilogo.png'
import imge from '../styles/cognisaptwo.jpg'

function Menubar() {
 const router=useRouter()
  return (
    <Navbar expand="lg" className='navbarcss ' style={{backgroundColor:"gray"}}>
<Navbar.Brand href="#home" className='logo '>
  {/* <Image src={imge} height={70} width={70}/> */}
  <b>CogniSap</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto navlinks" >
            <Nav.Link href="#home" onClick={()=>router.push('../')} className='text-dark'>Home</Nav.Link>
            <Nav.Link href="#blog"  className='text-dark' onClick={()=>router.push('../freelenceregister/blog')}>Blog</Nav.Link>
            <Nav.Link onClick={()=>router.push('../contact')} className='text-dark' >Contact</Nav.Link>
            <Nav.Link href="#aboutus" className='text-dark'  onClick={()=>router.push('../aboutus')}>About Us</Nav.Link>
          </Nav>
          <Button className='signinbtn' onClick={()=>router.push('../signin')}>SignIn</Button>{'               '}
          <Button className='signupbtn' onClick={()=>router.push('../clientregister')}>Client SignUp</Button>
          <Button className='signupbtn' onClick={()=>router.push('../freelenceregister')}>Freelance Signup</Button>
  </Navbar>
  );
}

export default Menubar;