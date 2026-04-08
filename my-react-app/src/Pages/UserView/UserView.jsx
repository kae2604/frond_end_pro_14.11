import { Container, Spinner, Card } from 'react-bootstrap';
import './UserView.css';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchUser} from "../../Api/usersApi.js";

const UserView = () => {

    const [user, setUser] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await fetchUser(id);
                setUser(data);
            } catch (e) {
                console.error(e);
            }
        }
        loadUser()
    },[id]);

    if (!user){
        return (
            <div className="loadingPlace">
                <div className='text-center mb-5'>
                    <Spinner animation="border" role="status"  variant="success">
                    </Spinner>
                    <span className='ms-3'>Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <Container className='pt-5'>
            <Card border="info" className="userDataCard">
                <Card.Header>
                    <Card.Title className="text-center">
                        Details of User #{user.id}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text><b>Name:</b> {user.name}</Card.Text><hr/>
                    <Card.Text><b>User name:</b>  {user.username}</Card.Text><hr/>
                    <Card.Text><b>Email:</b>  {user.email}</Card.Text><hr/>
                    <Card.Text><b>Phone:</b>  {user.phone}</Card.Text><hr/>
                    <Card.Text> <b>Website:</b> {user.website}</Card.Text><hr/>
                    <Card.Text><b>Company:</b>  {user.company.name}</Card.Text><hr/>
                    <Card.Text><b>City:</b>   {user.address.city}</Card.Text><hr/>
                    <Card.Text><b>Street:</b>   {user.address.street}</Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Card.Link
                        className='text-center'
                        as={Link}
                        to={"/usersList"}>
                        Back to list of users
                    </Card.Link>
                </Card.Footer>
            </Card>
        </Container>
    );
};
export default UserView;




