import React from 'react'
import some from '../styles/cognisaptwo.jpg'
import som from '../styles/cognilogo.png'
import Image from 'next/image'
import { Button } from 'react-bootstrap'

export default function Left() {
  return (
    <div>
        <p className='leftheading text-center'>CogniSap</p>
        <p className='content'>We dwelling elegance do shutters appetite yourself diverted.
While we were not the first home cleaning company in the UK, we take pride in being market leaders in introducing an instant online booking system plus the facility for our customers to login and control their cleaning service 24/7, 365 days a year putting you in complete control.
As a result of our philosophy to be the most forward thinking home cleaning company and our focus on understanding customer needs, we have and will continue to expand across the UK with franchises in the southwest of England to the north east of Scotland with over 50 territories nationwide. </p>
  {/* <div className='logos'>
  <Image src={some} height={100} width={100}/>{"    "}
    <Image src={som} height={100} width={100}/>{"    "}
  </div> */}
  <Button className='logos'>know more</Button>
    </div>
  )
}
