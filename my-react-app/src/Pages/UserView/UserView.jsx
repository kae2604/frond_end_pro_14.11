import { Container, Spinner, Card } from 'react-bootstrap';
import './UserView.css';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchUser} from "../../Api/usersApi.js";
import ErrorPage from "../ErrorPage/index.js";

const UserView = () => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isErrorHttp, setIsErrorHttp] = useState(false);
    const [isErrorNetwork, setIsErrorNetwork] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [errorStatus, setErrorStatus] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await fetchUser(id);
                setUser(data);
                setIsLoading(false)
            } catch (error) {
                setTimeout(() => {
                    if (error.type === 'http') {
                        setErrorText('Failed to load data from the server');
                        setErrorStatus(`Status: ${error.status}`)
                        setIsErrorHttp(true);
                    } else if (error.type === 'network') {
                        setErrorText("Server not found")
                        setIsErrorNetwork(true);
                    }
                    setIsLoading(false);
                }, 1000);
            }
        }
        loadUser()
    },[id]);

    return (
        <Container className='mb-5 pt-5'>
            <div className="loadingPlace">
                {isLoading && (
                    <div className='text-center mb-5'>
                        <Spinner animation="border" role="status"  variant="success"></Spinner>
                        <span className='ms-3'>Loading...</span>
                    </div>
                )}
            </div>
            {isErrorNetwork ? (
                <ErrorPage errorText={errorText}/>
            ) : isErrorHttp ? (
                <ErrorPage errorText={errorText}
                           errorStatus={errorStatus}/>
            ) : (
                user && (
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
                                to={"/users-list"}>
                                Back to list of users
                            </Card.Link>
                        </Card.Footer>
                    </Card>
                )
            )}
        </Container>
    );
};
export default UserView;




