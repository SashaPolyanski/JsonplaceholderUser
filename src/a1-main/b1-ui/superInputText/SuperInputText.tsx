import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from "../superInputPassword/SuperInputPassword.module.css";
import {useAppDispatch} from "../../b2-bll/store";
import {setError} from "../../b2-bll/loginReducer";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType
const SuperInputText: React.FC<SuperInputTextPropsType> = ({onChange, ...restProps}) => {
    const dispatch = useAppDispatch()
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)
        dispatch(setError(false))
    }


    return (
        <div className={s.inputContainer}>
            <input
                type={'text'}
                className={s.input}
                onChange={onChangeCallback}
                {...restProps}
            />
        </div>
    );
};

export default SuperInputText;