import { Container } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import PropTypes from 'prop-types';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ children }) => {

    return (
        <>
            <NavigationBar />
            <Container className="mt-4">
                {children}
            </Container>
            <ToastContainer />
        </>
    );
};
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default MainLayout;
