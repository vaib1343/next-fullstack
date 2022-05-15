import { FormLabel, Input, Textarea } from '@chakra-ui/react';
import { InputHTMLAttributes } from 'react';

interface FormInputType extends InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
    name: string;
    label: string;
}

export const FormInput: React.FC<FormInputType> = ({ name, value, onChange, label, placeholder, type = 'text', ...props }) => {
    let field;
    if (type === 'textArea') {
        field = <Textarea name={name} onChange={onChange} value={value} placeholder={placeholder} />;
    } else {
        field = <Input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />;
    }
    return (
        <>
            <FormLabel>{label}</FormLabel>
            {field}
        </>
    );
};
