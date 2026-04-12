import {Card, Container} from "react-bootstrap";
import PropTypes from 'prop-types';

const ErrorPage = ({errorText, errorStatus}) => {

    return (
        <Container className='pt-5'>
            <Card border="danger" className="userDataCard">
                <Card.Header>
                    <Card.Title className="text-center text-danger">
                        ERROR!!!
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-center text-danger fs-6">
                        <h2>{errorText}
                        <br/>
                            {errorStatus  && (
                                <>
                                    <hr />
                                    <div>{errorStatus}</div>
                                </>
                            )}
                        </h2>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Card.Text>
                        <h4>Please try again later...</h4>
                    </Card.Text>
                </Card.Footer>
            </Card>
        </Container>
    )
};
ErrorPage.propTypes = {
    errorText: PropTypes.string.isRequired,
    errorStatus: PropTypes.string,
};
export default ErrorPage;