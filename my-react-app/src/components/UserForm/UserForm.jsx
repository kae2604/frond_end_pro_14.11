import {Button, Form} from "react-bootstrap";
import Input from "../Input";
import Editor from "../Editor";
import {useFormik} from "formik";
import {validationSchema} from "./validationSchema.js";
import {useEffect} from "react";

const UserForm = ({users = null, post = null, onSubmit }) => {

    const formik = useFormik({
        initialValues: {
            title: "",
            userId: "0",
            body: ""
        },
        validationSchema,
        onSubmit,
    });

    useEffect(() => {
        if(!post) return
        formik.setValues({...post})
    }, [post]);

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Input
                label={'Title'}
                className='mb-3'
                name='title'
                value={formik.values.title}
                onChange={formik.handleChange}
                touched={formik.touched.title}
                error={formik.errors.title}
            />
            <Form.Group className='mb-3'  controlId="control_user">
                <Form.Label column='sm'>Author</Form.Label>
                <Form.Select
                    name="userId"
                    onChange={formik.handleChange}
                    value={formik.values.userId}
                    error={formik.errors.userId}
                >
                    <option value='0' disabled>Default select</option>
                    {users && users.map(({id, name}) => (
                        <option value={id} key={id}>{name}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Editor
                name='body'
                className='mb-3'
                onChange={formik.handleChange}
                setFieldTouched={formik.setFieldTouched}
                value={formik.values.body}
                error={formik.errors.body}
                touched={formik.touched.body}
            />

            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default UserForm;