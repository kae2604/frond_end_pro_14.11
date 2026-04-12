import { Container, Button, Spinner, Row, Col, Form } from 'react-bootstrap';
import {Link,useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {fetchUsers} from '../../Api/usersApi.js';
import './UsersList.css';
import ErrorPage from "../ErrorPage";
import UsersTable from "../../components/UsersTable";
import ConfirmToast from "../../components/ConfirmToast";

const UsersList = ({users,
                   setUsers,
                   startFetchUsers,
                   setStartFetchUsers,
                   finishDownload,
                   setFinishDownload,}) => {

    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [isErrorHttp, setIsErrorHttp] = useState(false);
    const [isErrorNetwork, setIsErrorNetwork] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [errorStatus, setErrorStatus] = useState(null);
    const [show, setShow] = useState(false);
    const [toastText, setToastText] = useState("");
    const [toastColor, setToastColor] = useState("");
    const [search, setSearch] = useState("");

    const limitFetchUsers = 3;

    useEffect(() => {
        if (users.length === 0 && startFetchUsers === 0) {
            const loadUsers = async () => {
                try {
                    const data = await fetchUsers(startFetchUsers, limitFetchUsers);
                    setUsers(data);
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
                    }, 1000);
                }
                finally {
                    setIsLoading(false);
                }
            };
            loadUsers()
        } else {
            setIsLoading(false);
        }
    },[]);

    useEffect(() => {
        if (!location.state?.toast) return;
        if (location.state.toast === "user_deleted") {
            setToastText(`User ${location.state.userName} was deleted`);
            setToastColor("danger");
        }
        if (location.state.toast === "user_edited") {
            setToastText(`User ${location.state.userName} was updated`);
            setToastColor("primary");
        }
        if (location.state.toast === "user_created") {
            setToastText(`User ${location.state.userName} was created`);
            setToastColor("success"); // или success
        }
        setShow(true);
        window.history.replaceState({}, document.title, location.pathname);
    }, []);

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
            }, 1000);
        }
        finally {
            setIsLoading(false);
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.trim().toLowerCase().startsWith(search.trim().toLowerCase())
    );

    return (
        <Container className='mb-5'>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                    <div className="loadingPlace">
                        {isLoading && (
                            <div className='text-center mb-5'>
                                <Spinner animation="border" role="status" variant="success"></Spinner>
                                <span className='ms-3'>Loading...</span>
                            </div>
                        )}
                    </div>
                </Col>
                <Col xs={3}>
                    <Form.Control
                        className="mb-3 myInput"
                        type="text"
                        placeholder="Search user..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </Col>
            </Row>
            {isErrorNetwork ? (
                <ErrorPage errorText={errorText}/>
            ) : isErrorHttp ? (
                <ErrorPage errorText={errorText}
                           errorStatus={errorStatus}/>
            ) : (
                <UsersTable users={filteredUsers}/>
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
            <ConfirmToast
                show={show}
                setShow={setShow}
                text={toastText}
                bg={toastColor}
            />
        </Container>
    )
};
UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string,
            phone: PropTypes.string,
            website: PropTypes.string,
        })
    ).isRequired,
    setUsers: PropTypes.func.isRequired,
    startFetchUsers: PropTypes.number.isRequired,
    setStartFetchUsers: PropTypes.func.isRequired,
    finishDownload: PropTypes.bool.isRequired,
    setFinishDownload: PropTypes.func.isRequired,
};
export default UsersList;