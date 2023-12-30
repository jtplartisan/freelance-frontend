"use client"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/style.css'
import { Button } from 'react-bootstrap';
import  {useRouter}  from 'next/navigation';
import Image from 'next/image';
import img from '../styles/cognilogo.png'

function Menubar() {
    const router=useRouter()
  return (
    <Navbar expand="lg" className='navbarcss'>
<Navbar.Brand href="#home" className='logo '><Image src={img} height={50} width={50}/>  CogniSap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto navlinks" >
            <Nav.Link href="#home" onClick={()=>router.push('../')} className='text-light'>Home</Nav.Link>
            <Nav.Link href="#blog"  className='text-light'>Blog</Nav.Link>
            <Nav.Link onClick={()=>router.push('../contact')} className='text-light' >Contact</Nav.Link>
            <Nav.Link href="#aboutus" className='text-light'>About Us</Nav.Link>
          </Nav>
          <Button className='signinbtn' onClick={()=>router.push('../signin')}>SignIn</Button>{'               '}
          <Button className='signupbtn' onClick={()=>router.push('../clientregister')}> SignUp</Button>
  </Navbar>
  );
}

export default Menubar;