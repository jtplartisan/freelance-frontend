"use client"
import React from 'react'
import { Col, Row, Nav, Card } from 'react-bootstrap'
import '../styles/style.css'
import img from '../styles/cognisaptwo.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <Row>
        <Col md={2} className='ticketmenu'>
          <Nav defaultActiveKey="/home" className="flex-column text-light">
            <h3 className='mx-5 my-3'>CogniSap</h3>
            <Nav.Link href="" className='text-light f-5'>Maintenance Services</Nav.Link>
            <Nav.Link href="../tickets/craete" className='text-light f-5'>Ticket Services</Nav.Link>
            <Nav.Link eventKey="link-2 " className='text-light f-5 '>Profile</Nav.Link>
            <Nav.Link className='text-light f-5'>
              Logout
            </Nav.Link>
          </Nav>

        </Col>
        <Col md={10} className=''>
          <Card className='ticketcards' style={{ marginLeft: "150px"}}>
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
