import * as yup from 'yup';


export const loginSchema = yup.object().shape({
  identifier: yup.string().required('⚠ Please enter a valid username'),
  password: yup.string().required('⚠ Please enter a valid password'),
});


export const productSchema = yup.object().shape({
  title: yup.string().required('⚠ Please enter a valid title'),
  price: yup.string().required('⚠ Please enter a valid price'),
  capacity: yup.string().required('⚠ Please enter a valid value'),
  description: yup.string().required('⚠ Please enter a valid text'),
  image_url: yup.string().required('⚠ Please enter a valid url'),
});

export const enquirySchema = yup.object().shape({
  first_name: yup.string().required('⚠ Please enter a valid first name'),
  last_name: yup.string().required('⚠ Please enter a valid last name'),
  email: yup.string().required('⚠ Please enter a valid email'),
  comment: yup.string().required('⚠ Please enter a Message'),
  startDate: yup.date().required('⚠ Please add a Valid date'),
  endDate: yup.date().required('⚠ Please add a Valid date'),
});


export const messageSchema = yup.object().shape({
  name: yup.string().required('⚠ Please enter a valid name'),
  email: yup.string().required('⚠ Please enter a valid email'),
  message: yup.string().required('⚠ Please enter a Message'),
});
