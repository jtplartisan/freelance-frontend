import React from 'react'
import { Card,Button} from 'react-bootstrap'
import Link from 'next/link'
import '../styles/style.css'

export default function Sapspecialist() {
  return (
    <div>
         <Card className="text-center">
      <Card.Header><h3><b>Reach the best SAP specialist and boost your SAP System</b></h3></Card.Header>
      <Card.Body>
        <Card.Title>SAP Specialist: Roles And Responsibilities</Card.Title>
        <Card.Text>
        An SAP specialist is a technical consultant that is an expert on various aspects of the Systems Applications and Products (SAP) software suite. They are considered experts on one or more components of SAP such as business function, sales, and development.
        </Card.Text>
        <Button variant="primary">know more</Button>
      </Card.Body>
      <Card.Footer className='text-center bg-dark text-light'>
      <Link href='./privacy'>Privacy and Policy</Link>{'                                  '}
<Link href='./terms'>Terms and conditions</Link>{'                                          '}
@<b>CogniSap</b>
      </Card.Footer>
    </Card>
    </div>
  )
}
