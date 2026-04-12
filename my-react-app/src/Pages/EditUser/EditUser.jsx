import { Container,Row, Col, Spinner} from 'react-bootstrap';
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import UserForm from '../../components/UserForm'
import {fetchEditUser} from "../../Api/usersApi.js";
import ErrorPage from "../ErrorPage/index.js";

const EditUser = ({users, setUsers}) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorHttp, setIsErrorHttp] = useState(false);
    const [isErrorNetwork, setIsErrorNetwork] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [errorStatus, setErrorStatus] = useState(null);

    const selectedUser = users.find(user => +user.id === +id);

    if (!selectedUser) {
        return null;
    }

    const editUserData = {
        name: selectedUser.name,
        username: selectedUser.username,
        email: selectedUser.email,
        phone: selectedUser.phone,
        website: selectedUser.website,
        city: selectedUser.address?.city || '',
        street: selectedUser.address?.street || '',
        companyName: selectedUser.company?.name || ''
    }

    const handleEdit = (dataFromForm) => {

        const body = {
            ...dataFromForm,
            address: {
                city: dataFromForm.city,
                street: dataFromForm.street
            },
            company: {
                name: dataFromForm.companyName
            }
        };

        const updateUser = async () => {
            setIsLoading(true);
            try {
                const data = await fetchEditUser(id, body);
                const newArray = users.map((user) => {
                    return +user.id === +data.id ? data : user
                });
                setUsers(newArray);
                navigate("/users-list", {
                    state: {
                        toast: "user_edited",
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
                setIsLoading(false);
            }
        };
        updateUser()
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
                        <UserForm onSubmit={handleEdit}
                                  editValues={editUserData}
                                  text={'Edit user'}/>
                    </Col>
                </Row>
            )}
        </Container>
    )
};
EditUser.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            username: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            website: PropTypes.string,
            address: PropTypes.shape({
                city: PropTypes.string,
                street: PropTypes.string,
            }),
            company: PropTypes.shape({
                name: PropTypes.string,
            }),
        })
    ).isRequired,
    setUsers: PropTypes.func.isRequired,
};
export default EditUser;