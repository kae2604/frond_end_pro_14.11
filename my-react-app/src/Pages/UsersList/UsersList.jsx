import { Container, Button, Spinner, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './UsersList.css';
import {useEffect, useState} from "react";
import {fetchUsers} from '../../Api/usersApi.js';
import {useNavigate} from "react-router-dom";
import ErrorPage from "../ErrorPage";
import UsersTable from "../../components/UsersTable";

const UsersList = ({users,
                   setUsers,
                   startFetchUsers,
                   setStartFetchUsers,
                   finishDownload,
                   setFinishDownload}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isErrorHttp, setIsErrorHttp] = useState(false);
    const [isErrorNetwork, setIsErrorNetwork] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [errorStatus, setErrorStatus] = useState(null);

    const limitFetchUsers = 3;



    useEffect(() => {
        if (users.length === 0) {
            const loadUsers = async () => {
                try {
                    const data = await fetchUsers(startFetchUsers, limitFetchUsers);
                    setUsers(data);
                    setIsLoading(false)
                    setFinishDownload(false);
                } catch (error) {
                    setFinishDownload(true)
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
            loadUsers()
        } else {
            setIsLoading(false);
        }
    },[]);


    const addMore = async () => {
        setIsLoading(true);
        const newStart = startFetchUsers + limitFetchUsers;
        try {
            const newUsers = await fetchUsers(newStart, limitFetchUsers);
            if (!newUsers) return;
            setUsers(prevState => [...prevState, ...newUsers]);
            setStartFetchUsers(newStart);
            if (newUsers.length < limitFetchUsers) {
                setFinishDownload(true);
            }
            setIsLoading(false);
        } catch (error) {
            setFinishDownload(true)
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
                <UsersTable users={users}
                            addMore={addMore}
                            finishDownload={finishDownload}/>
            )}
            <Row>
                <Col xs={6}>
                    {!finishDownload && (
                        <Button className='d-block  mt-5 buttonBottom'
                                variant="info"
                                onClick={addMore}>
                            Add more
                        </Button>
                    )}
                </Col>
                <Col xs={6} className='d-flex justify-content-end'>
                    <Button className='d-block mt-5 buttonBottom'
                            variant="info"
                            as={Link}
                            to="/users/create-user">
                        Create new user
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default UsersList;