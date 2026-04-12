import { Toast } from "react-bootstrap";
import PropTypes from "prop-types";

const ConfirmToast = ({ show, setShow, text,bg}) => {
    return (
        <Toast
            bg={bg}
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
            style={{
                position: "fixed",
                bottom: 20,
                right: 20
            }}
        >
            <Toast.Header>
                <strong className="me-auto">Success</strong>
            </Toast.Header>

            <Toast.Body className="text-white">
                {text}
            </Toast.Body>
        </Toast>
    );
};
ConfirmToast.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    bg: PropTypes.string,
};
export default ConfirmToast;

