import Carousel from 'react-bootstrap/Carousel';
import {Card, Stack} from 'react-bootstrap'
  import React from 'react'
import { margin } from '@mui/system';
import { ForkLeft } from '@mui/icons-material';
import pies2 from './animal_images/pies2.jpeg';
import cat5 from './animal_images/cat5.jpeg';
import cat4 from './animal_images/cat4.jpeg';
import cat3 from './animal_images/cat3.jpeg';
import cat2 from './animal_images/cat2.jpeg';
import cat1 from './animal_images/cat1.jpeg';
  function Karuzela() {
 
    return (
    <div>
        <h1 className="text-center fw-bold my-5">
        Welcome to Friendly Shelter
        </h1>
        
        <Carousel  style={{ width: 1500, left: '20%',margin: 10 }}>
        <Carousel.Item>
        <Stack
            direction="horizontal"
            gap={3}
            
            >
                
            <Card>
              <img
            
            src={cat3}
            alt="Third slide"
            width={500} 
            height={500} 
            />
            <Carousel.Caption>
            <h3>kot4</h3>
            
            </Carousel.Caption>  
            </Card>
            <Card>
              <img

            src={cat2}
            alt="Third slide"
            width={500} 
            height={500} 
            />
            <Carousel.Caption>
            <h3>kot2</h3>
            
            </Carousel.Caption>  
            </Card>
            <Card>
              <img
           
            src={cat3}
            alt="Third slide"
            width={500} 
            height={500} 
            />
            <Carousel.Caption>
            <h3>kot3</h3>
            
            </Carousel.Caption>  
            </Card>
           </Stack>
        </Carousel.Item>
        <Carousel.Item>
        <Stack
            direction="horizontal"
            gap={3}
            
            >
            <Card>
              <img
            
            src={cat4}
            alt="Third slide"
            width={500} 
            height={500} 
            />
            <Carousel.Caption>
            <h3>kot4</h3>
            
            </Carousel.Caption>  
            </Card>
            <Card>
              <img
           
            src={cat5}
            alt="Third slide"
            width={500} 
            height={500} 
            />
            <Carousel.Caption>
            <h3>pies1</h3>
            
            </Carousel.Caption>  
            </Card>
            <Card>
              <img
            
            src={pies2}
            alt="Third slide"
            width={500} 
            height={500} 
            />
            <Carousel.Caption>
            <h3>pies2</h3>
            
            </Carousel.Caption>  
            </Card>
            </Stack>
        </Carousel.Item>
        </Carousel>
        </div>
        
    )
    }
export default Karuzela;