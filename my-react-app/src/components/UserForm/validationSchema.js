import * as Yup from "yup";

export const validationSchema = Yup.object({
    title: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(100, 'Must be 15 characters or less')
        .required('Required'),
    body: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
});