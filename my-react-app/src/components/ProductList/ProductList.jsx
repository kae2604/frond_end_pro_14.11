import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard.jsx";
import PropTypes from "prop-types";

const ProductList = ({products, editCard, deleteCard}) => {

    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Col md={3} key={product.id}>
                        <ProductCard
                            product={product}
                            editCard={editCard}
                            deleteCard={deleteCard}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    editCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
};

export default ProductList;




