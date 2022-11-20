import {useState, useEffect} from "react";
import {db} from './firebase-config'
import {collection, getDocs, addDoc, deleteDoc,doc} from 'firebase/firestore';
import {Row, Col, Container} from 'react-bootstrap'

function DbOperations() {
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

    return <div className="DbOperations">
      <h3>Add an animal</h3>
      <input placeholder='Name...'
      onChange={(event) => {
        setNewName(event.target.value);
      }}></input>
      <input placeholder='Species...'
      onChange={(event) => {
        setNewSpecies(event.target.value);
      }}></input>
      <input placeholder='Age...'
      onChange={(event) => {
        setNewAge(event.target.value);
      }}></input>
      <input placeholder='Character...'
      onChange={(event) => {
        setNewCharacter(event.target.value);
      }}></input>

      <button onClick={createAnimal}> Add an animal</button>
      
      {animals.map((animals) => {
        return (
          <Container>
            <Row md={6}>
              <Col>
              Name: {animals.name} <br/>
              Species: {animals.species}<br/>
              Age: {animals.age}<br/>
              Character: {animals.character}<br/>
              <button onClick={() => {deleteAnimal(animals.id)}}>Delete animal</button>
              </Col>
            </Row>
          </Container>
        );
      })}
      </div>;
  
}

export default DbOperations