import * as Yup from "yup";

export const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    city: '',
    street: '',
    companyName: '',
};

export const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Must be more than 3 characters')
        .required('Required'),
    username: Yup.string()
        .min(3, 'Must be more than 3 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .min(5, 'Too short')
        .max(50, 'Too long')
        .required('Required'),
    phone: Yup.string()
        .required('Phone is required'),
    website: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    street: Yup.string()
        .required('Required'),
    companyName: Yup.string()
        .required('Required')
});