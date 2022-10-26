import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CheckOut = () => {
    const details = useLoaderData();
    const {name,title,description,price,category} = details;
    return (
        <Card className="mx-auto mt-5">
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
          <Card.Title> Mentor-Name: {name}</Card.Title>
          <Card.Text>
            <p>{description}</p>
            <p>course fees: ${price}</p>
            <p>Type : {category}</p>
          </Card.Text>
          <Button variant="primary">CheckOut</Button>
        </Card.Body>
      </Card>
    );
};

export default CheckOut;