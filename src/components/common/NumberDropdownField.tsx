import React from 'react';
import { Field, useField,useFormikContext } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';

function removeEmptyStrings(array) {
    return array.filter(item => item !== "");
}


interface CheckboxFieldProps {
  name: string;
  label: string;
  caption?: React.ReactNode;
  options?: string[];
  rankings : number [];
  required?: boolean;
}

const NumberDropdownField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  caption = <></>,
  options = [],
  rankings,
  required
}) => {
    const [{}, meta, helpers] = useField({name});   // useField hook to access meta properties
    const {setValue} = helpers;
    const [selectedOptions, setSelectedOptions] = useState(new Array(options.length).fill(""))//use a setstate hook to create a state for clicked selections
    useEffect(() => {
    setValue(removeEmptyStrings(selectedOptions));
    }, [selectedOptions]);

    const handleSelectedOptions = (selectedOption, index) => {
        let newSelectedOptions = [...selectedOptions];
        const previousIndex = newSelectedOptions.findIndex((option, idx) => option === selectedOption && index !== idx)
        if (previousIndex != -1) {    
            newSelectedOptions[previousIndex] = "";
        }
        newSelectedOptions[index] = selectedOption;
        setSelectedOptions(newSelectedOptions);

    };
    

    return (
    <div className="grid grid-cols-1 mb-5">
        <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
        <label htmlFor={name} className="font-semibold">
        {label}
        </label>
        <div>
        {options.map((option, index) => (
            <label key={option} className="block">
            <Field
                as="select"
                name= {name}
                value={selectedOptions[index]}
                className={`form-select mt-2 text-charcoal-600 border 'border-charcoal-300'
                rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700`}
                onChange = {e => {
                    handleSelectedOptions(e.target.value, index);
                }} 
            >
                <option value="">{"-Select rankings-"}</option>
                {rankings.map(ranking => (
                <option key={`${name}${index}${ranking}`} value={ranking}>{ranking}</option>
                ))}
            </Field>
            {"    " + option}
            <label htmlFor={`${name}${index}`} className="font-semibold">
                {required && <span className="text-red-600 ml-2">*</span>
                }
            </label>
            </label>
        ))}
        </div>
        {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
    );
};

export default NumberDropdownField;
