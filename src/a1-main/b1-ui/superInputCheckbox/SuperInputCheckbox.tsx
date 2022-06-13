import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './SuperInputCheckbox.module.css'



type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType



const SuperInputCheckbox: React.FC<SuperInputTextPropsType> = ({onChange, ...restProps}) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

    }

    return (
        <div>
            <input
            type={'checkbox'}
            onChange={onChangeCallback}
            className={s.input}
            {...restProps}
            />
        </div>
    );
};

export default SuperInputCheckbox;