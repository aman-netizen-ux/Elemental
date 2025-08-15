import React from 'react';

type InputFieldProps = {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    placeholder,
    value,
    onChange
}) => {
    return (

        <label className='gap-2 flex flex-col'>
            <span className='font-inter text-[14px] text-white font-medium'>{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required 
                className="bg-[#2C2B2B] text-[#898989] font-semibold text-[13px] rounded-[7px] py-2 px-2.5 w-full"
            />
        </label>


    );
}

export default InputField;