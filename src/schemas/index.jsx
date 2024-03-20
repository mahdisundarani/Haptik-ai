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

export const Demo = Yup.object({
    name:Yup.string().min(2).max(25).required("please enter your name"),
    cname:Yup.string().min(2).max(25).required("please enter your company name"),
    email:Yup.string().email().required("please enter your email"),
    jtitle:Yup.string().required("please enter your job title"),
    pno:Yup.number().required("please enter your phone number"),
})