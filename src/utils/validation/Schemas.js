import * as yup from 'yup';


export const loginSchema = yup.object().shape({
  identifier: yup.string().required('⚠ Please enter a valid username'),
  password: yup.string().required('⚠ Please enter a valid password'),
});


export const productSchema = yup.object().shape({
  identifier: yup.string().required('⚠ Please enter a valid text'),
  price: yup.string().required('⚠ Please enter a valid text'),
  description: yup.string().required('⚠ Please enter a valid text'),
  image_url: yup.string().required('⚠ Please enter a valid text'),
});
