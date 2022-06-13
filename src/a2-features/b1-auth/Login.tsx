import React from 'react';
import {useFormik} from "formik";
import * as yup from 'yup'
import SuperInputPassword from "../../a1-main/b1-ui/superInputPassword/SuperInputPassword";
import SuperInputText from "../../a1-main/b1-ui/superInputText/SuperInputText";
import Button from '@mui/material/Button/Button';
import s from './Login.module.css'
import SuperInputCheckbox from "../../a1-main/b1-ui/superInputCheckbox/SuperInputCheckbox";

const Login = () => {
    const validations = yup.object().shape({
        email: yup.string().email('Invalid email address'),
    })
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: validations
    })
    return (
        <div className={s.loginWrapper}>
            <div className={s.loginContainer}>
                <div>
                    <label>
                        Login:
                    </label>
                    <SuperInputText
                        id={'login'}
                        type={'text'}
                        {...formik.getFieldProps('login')}
                    />
                </div>

                <div>
                    <label>
                        Password:
                    </label>
                    <SuperInputPassword
                        id={'password'}
                        type="password"
                        {...formik.getFieldProps('password')}/>
                </div>
                <div>

                    <SuperInputCheckbox
                        id={'rememberMe'}
                        type="checkbox"
                        {...formik.getFieldProps('rememberMe')}/>
                    <label>
                        Remember me
                    </label>

                </div>
                <Button variant={'contained'} className={s.btn} onClick={() => {
                    formik.handleSubmit()
                }}>Login</Button>
            </div>
            </div>

    );
};

export default Login;