import * as Yup from "yup";

export const initialValues = {
    title: '',
    description: '',
    price: '',
    discountPrice: '',
    category: '',
    brand: '',
    sku: '',
    quantity: '',
    mainPhoto: '',
    additionalPhoto1: '',
    additionalPhoto2: '',
    additionalPhoto3: '',
    isActive: false,
    inStock: false,
    showOnMain: false,
};

export const validationSchema = Yup.object({
    title: Yup.string()
        .min(3, 'Must be more than 3 characters')
        .required('Required'),
    description: Yup.string()
        .min(10, 'Must be more than 10 characters')
        .required('Required'),
    price: Yup.number()
        .positive('Must be positive')
        .required('Required'),
    discountPrice: Yup.number()
        .positive('Must be positive')
        .max(Yup.ref("price"), "Can't be more than 'price'!!! ")
        .required('Required'),
    category: Yup.string()
        .required('Required'),
    brand: Yup.string()
        .required('Required'),
    sku: Yup.string()
        .max(50, 'Must be less than 50 characters')
        .min(5, 'Must be more than 5 characters')
        .required('Required'),
    quantity: Yup.number()
        .min(0, "Can't be less than zero !!!")
        .required('Required'),
    mainPhoto: Yup.string()
        .url("It must be a correct URL")
        .required('Required'),
    additionalPhotos: Yup.array().of(
        Yup.string()
            .url("It must be a correct URL")
        )
});
