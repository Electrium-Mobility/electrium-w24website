import React from 'react';
import { Field, useField } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';


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
  let helpersArray =[]
  const [{}, meta] = useField({name});   // useField hook to access meta properties
  for (let i = 0; i < options.length; i ++) { //manage each state of the dropdown individually
    const [{}, _, helpers ] = useField(`electriumProject${i}`); 
    const {setValue} = helpers;
    helpersArray[i] = setValue;
  }
  
//   const [, meta] = useField('electriumProjects1'); 
  const [selectedOptions, setSelectedOptions] = useState(new Array(options.length).fill(0))//use a setstate hook to create a state for clicked selections


  const handleSelectedOptions = (selectedOption, index) => {
    let newSelectedOptions = [...selectedOptions];
    const previousIndex = newSelectedOptions.findIndex((option, idx) => option === selectedOption && index !== idx)
    if (previousIndex != -1) {    
        newSelectedOptions[previousIndex] = 0;
    }
    newSelectedOptions[index] = selectedOption;
    setSelectedOptions(newSelectedOptions);
  };

    return (
    <div className="grid grid-cols-1 mb-5">
        <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
        <label htmlFor={name} className="font-semibold">
        {label} {required && <span className="text-red-600">*</span>}
        </label>
        <div className={`p-4 bg-grey border-2 ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'} rounded-md`}>
        {options.map((option, index) => (
            <label key={option} className="block">
            <Field
                as="select"
                name={`${name}${index}`}
                value={selectedOptions[index]}
                className={`form-select mt-2 text-charcoal-600 border ${
                meta.touched && meta.error ? 'border-red-500' : 'border-charcoal-300'
                } rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700`}
                onChange = {e => {
                    handleSelectedOptions(Number(e.target.value), index);
                    helpersArray[index](e.target.value);
                }} 
            >
                <option value="">{"-Select rankings-"}</option>
                {rankings.map(ranking => (
                <option key={`${name}${index}${ranking}`} value={ranking}>{ranking}</option>
                ))}
            </Field>
            {"    " + option}
            <label htmlFor={name + String(index)} className="font-semibold">
                {required && <span className="text-red-600">*</span>}
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
