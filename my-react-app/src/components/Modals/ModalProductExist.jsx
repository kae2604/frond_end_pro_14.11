import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function ModalProductExist({showModal, onClose}) {

    return (
        <Modal
            show={showModal}
            onHide={onClose}
            backdrop="static"
            keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger'>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center fs-4'>
                    Product with this SKU already exists!!!
                </Modal.Body>
        </Modal>
    );
};

ModalProductExist.propTypes = {
    showModal: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalProductExist;