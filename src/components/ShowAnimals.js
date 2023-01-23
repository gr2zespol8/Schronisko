import {React, useState, useEffect} from 'react'
import {Button, Card, Container,Row,Col} from 'react-bootstrap'
import {storage} from './firebase-config'
import {
  ref,
  getDownloadURL,
  listAll
} from "firebase/storage";


function ShowAnimals() {

  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "animal_pics/");

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  


  return (
    
      
      <div class="container pt-5 pb-3 px-lg-5 mb-5">
        <h1 class="mb-5">These animals are waiting for adoption!</h1>
        <Row>
        {imageUrls.map((url) => {
          return (

            <Col className="col-3 mb-5">
              <Card className="flex-fill">
              <Card.Img variant="top" src={url}/>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  
                {url.substr(86,(url.indexOf('.jpeg')-86))}
                </Card.Text>
                
                
                  <a href={"/Animals/"+ url.substr(86,(url.indexOf('.jpeg')-86))}>Meet me!</a>
                
              </Card.Body>
              </Card>
            </Col>
        );
        })}
        </Row>
        </div>
  )
}


export default ShowAnimals