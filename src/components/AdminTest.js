import {useState, useEffect} from "react";
import {db} from './firebase-config'
import {collection, getDocs, addDoc, deleteDoc,doc} from 'firebase/firestore';
import {Row, Col, Button, Card, InputGroup,Form} from 'react-bootstrap'
import { v4 } from "uuid";
import {storage} from './firebase-config'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";


function AdminTest() {
    const [newName, setNewName] = useState(''),
          [newSpecies, setNewSpecies] = useState(''),
          [newAge, setNewAge] = useState(''),
          [newCharacter, setNewCharacter] = useState('');

    const [animals, setAnimals] = useState([]);
    const animalsCollectionRef = collection(db, "animals");

    const createAnimal = async () => {
      await addDoc(animalsCollectionRef, 
        {name: newName,species:newSpecies,age:newAge,character:newCharacter})

    };

    const deleteAnimal = async (id) => {
      const animalDoc = doc(db, "animals", id);
      await deleteDoc(animalDoc);
    };

    useEffect(() => {

      const getAnimals = async () => {
        const data = await getDocs(animalsCollectionRef);
        setAnimals(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

      };
      getAnimals();
    }, [])

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "animal_pics/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `animal_pics/${animals.id}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);



    return <div className="DbOperations">
      <h3>Add an animal</h3>
      <InputGroup className="mb-4">
      
      <Form.Control placeholder='Name...'
      onChange={(event) => {
        setNewName(event.target.value);
      }}/>
      <Form.Control placeholder='Species...'
      onChange={(event) => {
        setNewSpecies(event.target.value);
      }}/>
      <Form.Control placeholder='Age...'
      onChange={(event) => {
        setNewAge(event.target.value);
      }}/>
      <Form.Control placeholder='Character...'
      onChange={(event) => {
        setNewCharacter(event.target.value);
      }}/>
      </InputGroup>

      <Form.Control
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <Button className="mb-4" 
      onClick={() => {
        createAnimal();
        uploadFile();
      }}> Add an animal</Button><br/>

        <Row>
        {imageUrls.map((url) => {
          return (

            <Col className="col-4 mb-5">
              <Card className="flex-fill">
              <Card.Img variant="top" src={url}/>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  {animals.name}dsadasda
                </Card.Text>
                <Button variant="primary">Poznaj</Button>
              </Card.Body>
              </Card>
            </Col>
        );
        })}
        </Row>
      </div>
  
}

export default AdminTest