import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './SuperInputPassword.module.css'
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputPasswordPropsType = DefaultInputPropsType




const SuperInputPassword:React.FC<SuperInputPasswordPropsType> = ({onChange,type,...restProps}) => {
    const [isShown, setIsShow] = useState<boolean>(false);
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

    }

    const typeInput = isShown ? 'text' : 'password';
    const togglePassword = () => setIsShow(!isShown);
    return (
        <div className={s.inputContainer}>
            <input
                type={typeInput}
                className={s.input}
                onChange={onChangeCallback}
                {...restProps}
            />
            <button onClick={togglePassword} className={`${s.eye} ${isShown && s.eyeShow}`}> </button>
        </div>
    );
};

export default SuperInputPassword;