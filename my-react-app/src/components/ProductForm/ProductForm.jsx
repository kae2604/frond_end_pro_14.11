import React from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import {initialValues, validationSchema} from "./formConfig.js";
import SelectOptions from "../SelectOptions/SelectOptions.jsx";

const ProductForm = ({onSubmit, clear, editProduct}) => {

    const formik = useFormik({
        initialValues: editProduct || initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: values => onSubmit(values)
    });

    return (
        <form onSubmit={formik.handleSubmit}>

            <Container>
                <Row>
                    <Col md={3}>
                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                name="category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}>
                                    <option value="" disabled hidden>Select a category</option>
                                    <SelectOptions type='category'></SelectOptions>
                            </Form.Select>
                            {formik.touched.category && formik.errors.category ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.category}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="brand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Select
                                name="brand"
                                value={formik.values.brand}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}>
                                    <option value="" disabled hidden>Select a brand</option>
                                    <SelectOptions type='brand'></SelectOptions>
                            </Form.Select>
                            {formik.touched.brand && formik.errors.brand ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.brand}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="sku">
                            <Form.Label>SKU</Form.Label>
                            <Form.Control type="text"
                                          name="sku"
                                          value={formik.values.sku}
                                          placeholder="Enter SKU"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.sku && formik.errors.sku ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.sku}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text"
                                          name="title"
                                          value={formik.values.title}
                                          placeholder="Enter title"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.title && formik.errors.title ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.title}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea"
                                          rows={5}
                                          name="description"
                                          value={formik.values.description}
                                          placeholder="Enter description"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.description && formik.errors.description ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.description}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group className="mb-3" controlId="quantity">
                            <Form.Label>Quantity in stock</Form.Label>
                            <Form.Control type="number"
                                          name="quantity"
                                          value={formik.values.quantity}
                                          placeholder="Enter quantity in stock"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.quantity && formik.errors.quantity ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.quantity}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number"
                                          name="price"
                                          value={formik.values.price}
                                          placeholder="Enter price"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.price && formik.errors.price ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.price}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="discountPrice">
                            <Form.Label>Price with discount</Form.Label>
                            <Form.Control type="number"
                                          name="discountPrice"
                                          value={formik.values.discountPrice}
                                          placeholder="Enter price with discount"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.discountPrice && formik.errors.discountPrice ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.discountPrice}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={9}>
                        <Form.Group className="mb-3" controlId="mainPhoto">
                            <Form.Label>Main photo</Form.Label>
                            <Form.Control type="text"
                                          name="mainPhoto"
                                          value={formik.values.mainPhoto}
                                          placeholder="Enter URL of main photo"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.mainPhoto && formik.errors.mainPhoto ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.mainPhoto}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="additionalPhoto1">
                            <Form.Label>Additional photos</Form.Label>
                            <Form.Control type="text"
                                          name="additionalPhoto1"
                                          value={formik.values.additionalPhoto1}
                                          placeholder="Enter URL of additional photo"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.additionalPhoto1 && formik.errors.additionalPhoto1 ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.additionalPhoto1}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="additionalPhoto2">
                            <Form.Control type="text"
                                          name="additionalPhoto2"
                                          value={formik.values.additionalPhoto2}
                                          placeholder="Enter URL of additional photo"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.additionalPhoto2 && formik.errors.additionalPhoto2 ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.additionalPhoto2}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="additionalPhoto3">
                            <Form.Control type="text"
                                          name="additionalPhoto3"
                                          value={formik.values.additionalPhoto3}
                                          placeholder="Enter URL of additional photos"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}/>
                            {formik.touched.additionalPhoto3 && formik.errors.additionalPhoto3 ? (
                                <Form.Text className="text-danger">
                                    {formik.errors.additionalPhoto3}
                                </Form.Text>
                            ) : null}
                        </Form.Group>

                    </Col>
                    <Col md={3}>
                        <hr/>
                        <Form.Group className="mb-3" controlId="isActive">
                            <Form.Check
                                type="switch"
                                name="isActive"
                                label="Make the product 'active' "
                                checked={formik.values.isActive}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="inStock">
                            <Form.Check
                                type="switch"
                                name="inStock"
                                label="Make the product 'in stock' "
                                checked={formik.values.inStock}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="showOnMain">
                            <Form.Check
                                type="switch"
                                name="showOnMain"
                                label="Add product to the main page"
                                checked={formik.values.showOnMain}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Group>

                        <hr/>

                        <div className='d-flex justify-content-between mt-5'>
                            <Button  variant="info"
                                     onClick={() => {
                                         formik.resetForm();
                                         clear();
                                     }}>
                                Clear inputs
                            </Button>
                            <Button type="submit" variant="success" >Add product</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </form>
    );
};

ProductForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    editProduct: PropTypes.object,
};

export default ProductForm;