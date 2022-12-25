import {FC, useState, ChangeEvent}  from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export interface Props {
    name: string;
    age : number;
    email: string;    
}

export const Person : FC<Props> =({name,age,email}) =>{
    const [country, setCountry] = useState<string | null>("")
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };  return (
    <div>
      
      <Card style={{ width: '18rem' ,margin:'20px'}}>
      <Card.Img variant="top" src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" />
      <Card.Body>
        <Card.Title>Name : {name}</Card.Title>
        <Card.Title>Age : {age}</Card.Title>
        <Card.Text>Email : {email}</Card.Text>      
    <InputGroup className="mb-3">
        
        <input placeholder='Enter your Country' onChange={handleInputChange} />
        {country}
    </InputGroup>
      </Card.Body>
    </Card>
    
    </div>
  );
}

