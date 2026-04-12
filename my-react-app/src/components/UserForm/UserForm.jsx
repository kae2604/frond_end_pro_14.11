import {Button, Form, Card} from "react-bootstrap";
import {useFormik} from "formik";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {initialValues, validationSchema} from "./validationSchema.js";

const UserForm = ({onSubmit, editValues,text}) => {

    const formik = useFormik({
        initialValues: editValues || initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit,
    });

    return (
        <Card border="info" className="p-4">
            <Form onSubmit={formik.handleSubmit}>
                <div className="text-end">
                    <Button variant="info"
                            className="btn-close"
                            aria-label="Close"
                            as={Link}
                            to={"/users-list"}>
                    </Button>
                </div>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  value={formik.values.name}
                                  placeholder="Enter name"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name ? (
                        <Form.Text className="text-danger">
                            {formik.errors.name}
                        </Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                                  name="username"
                                  value={formik.values.username}
                                  placeholder="Enter username"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}/>
                    {formik.touched.username && formik.errors.username ? (
                        <Form.Text className="text-danger">
                            {formik.errors.username}
                        </Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                                  name="email"
                                  value={formik.values.email}
                                  placeholder="Enter email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}/>
                    {formik.touched.email && formik.errors.email ? (
                        <Form.Text className="text-danger">
                            {formik.errors.email}
                        </Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text"
                                  name="phone"
                                  value={formik.values.phone}
                                  placeholder="Enter phone"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}/>
                    {formik.touched.phone && formik.errors.phone ? (
                        <Form.Text className="text-danger">
                            {formik.errors.phone}
                        </Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text"
                                  name="website"
                                  value={formik.values.website}
                                  placeholder="Enter website"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}/>
                    {formik.touched.website && formik.errors.website ? (
                        <Form.Text className="text-danger">
                            {formik.errors.website}
                        </Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text"
                                  name="city"
                                  value={formik.values.city}
                                  placeholder="Enter city"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}/>
                    {formik.touched.city && formik.errors.city ? (
                        <Form.Text className="text-danger">
                            {formik.errors.city}
                        </Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="street">
                    <Form.Label>Street</Form.Label>
                    <Form.Control type="text"
                                  name="street"
                                  value={formik.values.street}
                                  placeholder="Enter street"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}/>
                    {formik.touched.street && formik.errors.street ? (
                        <Form.Text className="text-danger">
                            {formik.errors.street}
                        </Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="companyName">
                    <Form.Label>Company name</Form.Label>
                    <Form.Control type="text"
                                  name="companyName"
                                  value={formik.values.companyName}
                                  placeholder="Enter company name"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}/>
                    {formik.touched.companyName && formik.errors.companyName ? (
                        <Form.Text className="text-danger">
                            {formik.errors.companyName}
                        </Form.Text>
                    ) : null}
                </Form.Group>

                <div className='d-flex justify-content-between mt-5'>
                    <Button  variant="secondary"
                             onClick={() => {
                                 formik.resetForm({ values: initialValues });
                             }}>
                        Clear inputs
                    </Button>
                    <Button type="submit" variant="success">{text}</Button>
                </div>
            </Form>
        </Card>
    );
};
UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    editValues: PropTypes.shape({
        name: PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string,
        city: PropTypes.string,
        street: PropTypes.string,
        companyName: PropTypes.string,
    }),
    text: PropTypes.string.isRequired,
};
export default UserForm;