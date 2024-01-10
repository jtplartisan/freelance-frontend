"use client"
import React from 'react'
import { Col, Row, Nav, Card, Button } from 'react-bootstrap'
import '../styles/style.css'
import { logout } from '../redux/authReducer'
import { useRouter } from 'next/navigation'
import Protected from '../Protected/Protected'
import {useDispatch} from 'react-redux'


 export default function page() {
  const dispatch = useDispatch()
 const router=useRouter()

  function logginout() {
    dispatch(logout())
    router.push('../signin')
  }
   return (
    <div>
      <Protected></Protected>
      <Row>
        <Col md={2} className='ticketmenu'>
          <Nav defaultActiveKey="/home" className="flex-column text-light">
            <h3 className='mx-5 my-3'>CogniSap</h3>
            <Nav.Link href="" className='text-light f-5'>Maintenance Services</Nav.Link>
            <Nav.Link href="../tickets/craete" className='text-light f-5'>Ticket Services</Nav.Link>
            <Nav.Link href="../tickets/ticketstatus" className='text-light f-5'>Ticket Status</Nav.Link>
            <Nav.Link href='../clientprofile' className='text-light f-5 '>Profile</Nav.Link>
            <Button className='text-light f-5' onClick={logginout}>
              Logout
            </Button>
          </Nav>
        </Col>
        <Col md={10} className=''>
          <Card className='ticketcards' style={{ marginLeft: "150px" }}>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='ticketcards'>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='ticketcards'>
            <Card.Body>
              <Card.Text>
                3 Some quick example text to build on the card title and make up the
                bulk of the cards content.  </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  )
}
