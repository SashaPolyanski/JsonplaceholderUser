import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from "../superInputPassword/SuperInputPassword.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType
const SuperInputText: React.FC<SuperInputTextPropsType> = ({onChange, ...restProps}) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

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