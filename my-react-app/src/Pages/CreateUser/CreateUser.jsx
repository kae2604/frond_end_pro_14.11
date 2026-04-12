import { Container,Row, Col, Spinner} from 'react-bootstrap';
import {useState} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import UserForm from '../../components/UserForm'
import {fetchAddNewUser} from "../../Api/usersApi.js";
import ErrorPage from "../ErrorPage";

const CreateUser = ({setUsers,IdNewUser, setIdNewUser}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isErrorHttp, setIsErrorHttp] = useState(false);
    const [isErrorNetwork, setIsErrorNetwork] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [errorStatus, setErrorStatus] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (dataFromForm) => {
        const body = {
            name: dataFromForm.name,
            username: dataFromForm.username,
            email: dataFromForm.email,
            phone: dataFromForm.phone,
            website: dataFromForm.website,
            address: {
                city: dataFromForm.city,
                street: dataFromForm.street
            },
            company: {
                name: dataFromForm.companyName
            }
        };
        const addNewUser = async () => {
            setIsLoading(true);
            try {
                const data = await fetchAddNewUser(body);
                const newUser = {...data, id: IdNewUser}
                setIdNewUser(prevId => prevId + 1)

                setUsers(prevState => [...prevState, newUser]);
                navigate("/users-list", {
                    state: {
                        toast: "user_created",
                        userName: data.name
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
                setIsLoading(false)
            }
        };
        addNewUser()
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
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <UserForm onSubmit={handleSubmit}
                                  text={'Add new user'}/>
                    </Col>
                </Row>
            )}
        </Container>
    )
};
CreateUser.propTypes = {
    setUsers: PropTypes.func.isRequired,
    IdNewUser: PropTypes.number.isRequired,
    setIdNewUser: PropTypes.func.isRequired,
};
export default CreateUser;