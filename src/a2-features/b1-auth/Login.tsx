import React from 'react';
import {useFormik} from "formik";
import SuperInputPassword from "../../a1-main/b1-ui/superInputPassword/SuperInputPassword";
import SuperInputText from "../../a1-main/b1-ui/superInputText/SuperInputText";
import Button from '@mui/material/Button/Button';
import s from './Login.module.css'
import SuperInputCheckbox from "../../a1-main/b1-ui/superInputCheckbox/SuperInputCheckbox";
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import Error from "../../a1-main/b1-ui/error/Error";
import {setError, setIsLoggedIn} from "../../a1-main/b2-bll/loginReducer";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../a1-main/b1-ui/routes/RoutesComponent";
import {setLoadingApp} from "../../a1-main/b2-bll/appReducer";
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";
import {selectError, selectIsLoading} from "../../a1-main/b2-bll/selectors";

type FormikErrorType = {
    email?: string
}

const Login = () => {

    const isLoading = useAppSelector(selectIsLoading)
    const error = useAppSelector(selectError)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const formik = useFormik({
            initialValues: {
                email: '',
                login: '',
                password: '',
                rememberMe: true
            },
            onSubmit: values => {
                dispatch(setLoadingApp(true))
                setTimeout(() => {
                    values.login === 'Admin' && values.password === '12345' ? HandleFormSubmit(values.login, values.password) : dispatch(setError(true))
                    formik.resetForm();
                    dispatch(setLoadingApp(false))
                }, 2000)

            },
            validate: (values) => {
                const errors: FormikErrorType = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                return errors
            }
        }
    )

    const HandleFormSubmit = (login: string, password: string) => {
        const UserData = JSON.stringify({login, password})
        localStorage.setItem('UserInfo', UserData)
        localStorage.getItem('UserInfo') && navigate(PATH.PROFILE + `/1`)
        dispatch(setIsLoggedIn(true))
    }
    if (isLoading) {
        return <Preloader/>
    }
    return (

        <div className={s.loginWrapper}>
            <div className={s.loginTitle}>Please use test login and password to continue</div>
            <div className={s.loginTitle}>Email: Any valid email</div>
            <div className={s.loginTitle}>Login: Admin</div>
            <div className={s.loginTitle}>Password: 12345</div>


            <div className={s.loginContainer}>
                <div>
                    <label>
                        Test email validation:
                    </label>
                    <SuperInputText
                        id={'email'}
                        type={'text'}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email &&
                        <div className={s.error}>{formik.errors.email}</div>}
                </div>
                <div className={s.loginInputItem}>
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
                {error && <div><Error/></div>}
                <div className={s.loginItem}>

                    <SuperInputCheckbox
                        id={'rememberMe'}
                        type="checkbox"
                        {...formik.getFieldProps('rememberMe')}/>
                    <label className={s.rememberMeText}>
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