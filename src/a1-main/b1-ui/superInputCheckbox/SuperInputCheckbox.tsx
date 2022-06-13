import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
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
            {...restProps}
            />
        </div>
    );
};

export default SuperInputCheckbox;