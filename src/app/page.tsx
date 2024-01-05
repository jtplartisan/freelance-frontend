"use client"
import Menubar from './home/Menubar';
import img from './styles/cognisaptwo.jpg'
import { Card ,Button,Row,Col} from 'react-bootstrap';
import Left from './home/Left'
import Right from './home/Right'
import Why from './home/Why'
import Sapspecialist from './home/Sapspecialist'
import { useRouter } from 'next/navigation';
import {store} from './redux/store'

export default function Home() {
  const router=useRouter()


  return (
    <main>
     <div>
    <Menubar/> 
<div className='main'>
<Row><Col><Left/></Col><Col><Right/></Col></Row>
</div>
<div>
  <Why/>
</div>
<div>
<Sapspecialist/>
</div>
      </div>
    </main>
  )
}
