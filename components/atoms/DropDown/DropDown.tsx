import { FormLabel, Select } from '@chakra-ui/react';
import React from 'react';

interface DropDownType extends React.InputHTMLAttributes<HTMLSelectElement> {
    options: Array<{ label: string; value: string }>;
    label: string;
}

export const DropDown: React.FC<DropDownType> = ({ label, value, onChange, options, name, placeholder = 'selct options', className, ...props }) => {
    return (
        <>
            <FormLabel>{label}</FormLabel>
            <Select variant='outline' value={value} onChange={onChange} placeholder={placeholder} name={name} className={className} >
                {options.map((li) => (
                    <option value={li.value}>{li.label}</option>
                ))}
            </Select>
        </>
    );
};
