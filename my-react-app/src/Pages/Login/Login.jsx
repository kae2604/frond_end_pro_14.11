import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import {Container, Button, Form, Card} from 'react-bootstrap';
import "./login.css";

const Login = ({ setIsAuth }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        if (password === "1234") {
            setIsAuth(true);
            navigate("/users/create-user");
        } else {
            setError(true);
        }
    };

    return (
        <Container className="my-container">
        <Card border="info" className="userDataCard">
            <Card.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group>
                        <Form.Text>
                            Please enter your password
                        </Form.Text>
                        <Form.Control
                            className="my-3"
                            type="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                                setError(false);
                            }}
                            placeholder="password"
                        />
                    </Form.Group>
                {error && (
                    <div className="alert alert-danger">
                        Password is incorrect
                    </div>
                )}
                    <Button type="submit">
                        Confirm
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </Container>
    );
};
Login.propTypes = {
    setIsAuth: PropTypes.func.isRequired,
};
export default Login;