import React from 'react';
import './ProductCard.scss';
import {Carousel, Button, Card} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductCard = ({product, editCard, deleteCard}) => {

    return (
        <Card border="" className="my-2">

            <Card.Title className="m-3 mb-0">SKU: {product.sku}</Card.Title>

            <hr/>

            <Card.Body>

                <Card.Text className="mb-1"> Main photo :</Card.Text>
                <Card.Img variant="top"
                          src={product.mainPhoto} alt="Phone"
                          className="cardMainPhoto"
                />

                <Card.Text className="mb-1">Category:</Card.Text>
                <Card.Title className="text-end">{product.category}</Card.Title>

                <Card.Text className="mb-1">Brand: </Card.Text>
                <Card.Title className="text-end">{product.brand}</Card.Title>

                <Card.Text className="mb-1">Title: </Card.Text>
                <Card.Title className="text-end">{product.title}</Card.Title>

                <Card.Text className="mb-1">Price: </Card.Text>
                <Card.Title className="text-end">{product.price}</Card.Title>

                <Card.Text className="mb-1"> Price with discount:</Card.Text>
                <Card.Title className="text-end">{product.discountPrice}</Card.Title>

                <Card.Text className="mb-1"> Quantity:</Card.Text>
                <Card.Title className="text-end">{product.quantity}</Card.Title>

                <Card.Text>Description:</Card.Text>
                <Card.Text>{product.description}</Card.Text>

                <hr/>

                <Card.Text className="mb-1"> In stock:</Card.Text>
                <Card.Title className="text-end">{product.inStock ? "YES" : "NO"}</Card.Title>

                <Card.Text className="mb-1"> Active:</Card.Text>
                <Card.Title className="text-end">{product.isActive ? "YES" : "NO"}</Card.Title>

                <Card.Text className="mb-1"> On main page:</Card.Text>
                <Card.Title className="text-end">{product.showOnMain ? "YES" : "NO"}</Card.Title>

                <hr/>

                <Card.Text className="mb-3"> Additional photos :</Card.Text>

                <Carousel>
                    {product.additionalPhoto1 && (
                        <Carousel.Item>
                            <img
                                className="d-block carouselPhotos"
                                src={product.additionalPhoto1} alt="First slide"
                            />
                        </Carousel.Item>
                    )}

                    {product.additionalPhoto2 && (
                        <Carousel.Item>
                            <img
                                className="d-block carouselPhotos"
                                src={product.additionalPhoto2} alt="First slide"
                            />
                        </Carousel.Item>
                    )}

                    {product.additionalPhoto3 && (
                        <Carousel.Item>
                            <img
                                className="d-block carouselPhotos"
                                src={product.additionalPhoto3} alt="First slide"
                            />
                        </Carousel.Item>
                    )}
                </Carousel>
            </Card.Body>

            <hr/>

            <div className='p-4'>
                <Button className='d-block mx-auto w-100'
                        variant="primary"
                        type="button"
                        onClick={() => editCard(product.sku)}
                        >
                    Edit
                </Button>
            </div>

            <div className='p-4'>
                <Button className='d-block mb-3  mx-auto w-100'
                        variant="danger"
                        onClick={() => deleteCard(product.id)}
                        >
                    Delete
                </Button>
            </div>
        </Card>
    )
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    editCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
};

export default ProductCard;