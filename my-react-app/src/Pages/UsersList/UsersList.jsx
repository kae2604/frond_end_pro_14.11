import { Container, Button, Spinner, Table } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './UsersList.css';
import {useEffect, useState} from "react";
import {fetchUsers} from '../../Api/usersApi.js';
import {useNavigate} from "react-router-dom";
import ErrorPage from "../ErrorPage/index.js";

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

    const navigate = useNavigate();

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


    const some = ()=>{
        navigate('/')
    }

    return (
        <Container>
            <div className="loadingPlace">
                {isLoading && (
                    <div className='text-center mb-5'>
                        <Spinner animation="border" role="status"  variant="success">
                        </Spinner>
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
                <div>
                    <Table bordered hover>
                        <thead className="table-secondary">
                        <tr>
                            <th className='text-center'>#</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Phone</th>
                            <th className='text-center'>Website</th>
                            <th className='text-center' colSpan={3}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="text-center align-middle">{user.id}</td>
                                <td className="align-middle">{user.name}</td>
                                <td className="align-middle">{user.email}</td>
                                <td className="align-middle">{user.phone}</td>
                                <td className="align-middle">{user.website}</td>
                                <td className='text-center tdWidth align-middle'>
                                    <Button className='buttonWidth align-middle'
                                            variant="success"
                                            as={Link}
                                            to={`/user/${user.id}`}>
                                        View
                                    </Button>
                                </td>
                                <td className='text-center tdWidth align-middle'>
                                    <Button className='buttonWidth'
                                            variant="primary">
                                        Edit
                                    </Button></td>
                                <td className='text-center tdWidth align-middle'>
                                    <Button className='buttonWidth'
                                            variant="danger"
                                            onClick={some}>
                                        Delete
                                    </Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    {!finishDownload && (
                        <Button className='d-block mx-auto mt-5 w-25'
                                variant="success"
                                onClick={addMore}>
                            Add more
                        </Button>
                    )}
                </div>
            )}
        </Container>
    )
}
export default UsersList;