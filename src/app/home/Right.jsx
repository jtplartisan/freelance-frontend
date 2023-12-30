import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import some from '../styles/anim1.webp'
import something from '../styles/anim2.webp'
import som from '../styles/anim3.jpg'
import so from '../styles/anim4.webp'

function Right() {
    return (
        <Carousel fade className='slider' >
            <Carousel.Item>
                <Image src={some}  height={350} width={600}/>
            
            </Carousel.Item>
            <Carousel.Item>
                <Image src={so}   height={350} width={600}/>
                
            </Carousel.Item>
            <Carousel.Item>
                <Image src={something}  height={350} width={600}/>
                
            </Carousel.Item>
            <Carousel.Item>
                <Image src={som}  height={350} width={600}/>
               
            </Carousel.Item>
        </Carousel>
    );
}

export default Right;
