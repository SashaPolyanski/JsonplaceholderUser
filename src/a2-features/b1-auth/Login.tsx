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

const Login = () => {

    const isLoading = useAppSelector(state => state.app.loadingApp)
    const error = useAppSelector(state => state.auth.error)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const formik = useFormik({
            initialValues: {
                login: '',
                password: '',
                rememberMe: false
            },
            onSubmit: values => {
                dispatch(setLoadingApp(true))
                setTimeout(() => {
                    values.login === 'Admin' && values.password === '12345' ? HandleFormSubmit(values.login, values.password) : dispatch(setError(true))
                    dispatch(setLoadingApp(false))
                }, 2000)

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