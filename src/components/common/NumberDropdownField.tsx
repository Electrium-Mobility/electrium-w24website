import React, { useState, useEffect } from 'react';
import { Field, useField, useFormikContext } from 'formik';

interface NumberDropdownFieldProps {
  name: string;
  label: string;
  caption?: React.ReactNode;
  options?: string[];
  rankings: number[];
  required?: boolean;
}

const NumberDropdownField: React.FC<NumberDropdownFieldProps> = ({
  name,
  label,
  caption = <></>,
  options = [],
  rankings,
  required
}) => {
    const [, meta, helpers] = useField({ name });
    const { setValue } = helpers;
    const { setFieldError, setFieldTouched } = useFormikContext();
    
    // Initialize with empty selections for each option
    const [selectedOptions, setSelectedOptions] = useState(new Array(options.length).fill(""));
    
    // When component mounts or when selections change, update the form field
    useEffect(() => {
        // Convert selections to numbers for the form value
        const numericSelections = selectedOptions
            .map(opt => opt === "" ? null : parseInt(opt))
            .filter(val => val !== null);
            
        setValue(numericSelections);
        
        // If all options aren't ranked and field is touched, set error
        if (meta.touched && selectedOptions.some(opt => opt === "") && required) {
            setFieldError(name, 'Please rank all projects');
        }
    }, [selectedOptions, setValue, name, meta.touched, required, setFieldError]);

    const handleSelectedOptions = (selectedOption, index) => {
        // Mark the field as touched
        setFieldTouched(name, true);
        
        let newSelectedOptions = [...selectedOptions];
        
        // If this ranking was already assigned to another option, clear it
        const previousIndex = newSelectedOptions.findIndex(
            (option, idx) => option === selectedOption && index !== idx
        );
        
        if (previousIndex !== -1) {    
            newSelectedOptions[previousIndex] = "";
        }
        
        // Set the new ranking
        newSelectedOptions[index] = selectedOption;
        setSelectedOptions(newSelectedOptions);
    };
    
    return (
        <div className="grid grid-cols-1 mb-5">
            <label htmlFor={name} className="font-semibold">
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
            <div>
                {options.map((option, index) => (
                    <label key={option} className="block mb-2">
                        <Field
                            as="select"
                            name={name}
                            value={selectedOptions[index]}
                            className={`form-select mt-2 text-charcoal-600 border ${
                meta.touched && meta.error ? 'border-red-500' : 'border-charcoal-300'
            } rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700`}
                            onChange={e => {
                                handleSelectedOptions(e.target.value, index);
                            }}
                        >
                            <option value="">{"-Select ranking-"}</option>
                            {rankings.map(ranking => (
                                <option key={`${name}${index}${ranking}`} value={ranking}>{ranking}</option>
                            ))}
                        </Field>
                        {"    " + option}
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