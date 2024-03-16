import * as Yup  from 'yup'

export const logInSchema =  Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your Password"),
})

export const signInSchema =  Yup.object({
    Fname:Yup.string().min(2).max(25).required("Please enter your name"),
    Lname:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your Password"),
    confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
}) 