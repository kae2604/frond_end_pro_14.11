import { Container,Row, Col, Button, Spinner, Table } from 'react-bootstrap';
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

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



    const editUser = users.find(user => +user.id === +id);

    // if (!editUser) {
    //     return <div>Loading...</div>;
    // }

    const editUserData = {
        name: editUser.name,
        username: editUser.username,
        email: editUser.email,
        phone: editUser.phone,
        website: editUser.website,
        city: editUser.address?.city || '',
        street: editUser.address?.street || '',
        companyName: editUser.company?.name || ''
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

        const addNewUser = async () => {
            setIsLoading(true);
            try {
                const data = await fetchEditUser(id, body);
                const newArray = users.map((user) => {
                    return +user.id === +data.id ? data : user
                });


                setUsers(newArray);
                setIsLoading(false)
                setTimeout(() => {
                    navigate("/users-list")
                }, 300)
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
                        <UserForm onSubmit={handleEdit}
                                  editValues={editUserData}
                                  text={'Edit user'}/>
                    </Col>
                </Row>
            )}
        </Container>
    )
}
export default EditUser;