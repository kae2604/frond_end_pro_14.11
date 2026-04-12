import {Container, Button, Spinner, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {fetchDeleteUser} from "../../Api/usersApi.js";
import ErrorPage from "../ErrorPage";

const DeleteUser = ({users, setUsers}) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorHttp, setIsErrorHttp] = useState(false);
    const [isErrorNetwork, setIsErrorNetwork] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [errorStatus, setErrorStatus] = useState(null);

    const userToDelete = users.find(u => +u.id === +id);

    const handleDelete = async () => {
        setIsLoading(true);
        try {
            const data = await fetchDeleteUser(id);
            const newArray = users.filter(user => +user.id !== +id);
            setUsers(newArray);
            navigate("/users-list", {
                state: {
                    toast: "user_deleted",
                    userName: userToDelete.name
                }
            });
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
            }, 1000);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <Container className='mb-5'>
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
                <Card border="danger" className="userDataCard">
                    <Card.Body>
                        <Card.Text className="text-center text-danger fs-6">
                            Are you sure you want to delete the user {userToDelete?.name}?
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                            <Button
                                className='w-25'
                                variant="secondary"
                                as={Link}
                                to={`/users-list`}>
                                Cancel
                            </Button>
                            <Button
                                className='w-25'
                                variant="danger"
                                onClick={handleDelete}>
                                Delete user
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </Container>
    )
};
DeleteUser.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,

    setUsers: PropTypes.func.isRequired,
};
export default DeleteUser;