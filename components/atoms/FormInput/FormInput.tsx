import { FormLabel, Input } from '@chakra-ui/react';
import { InputHTMLAttributes } from 'react';

interface FormInputType extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const FormInput: React.FC<FormInputType> = ({ name, value, onChange, label, placeholder, type = 'text', ...props }) => {
    return (
        <>
            <FormLabel>{label}</FormLabel>
            <Input name={name} onChange={onChange} value={value} placeholder={placeholder} type={type} />
        </>
    );
};
