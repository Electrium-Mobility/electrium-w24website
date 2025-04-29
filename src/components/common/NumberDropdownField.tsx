// import React from 'react';
// import { Field, useField,useFormikContext } from 'formik';
// import { useState } from 'react';
// import { useEffect } from 'react';

// function removeEmptyStrings(array) {
//     return array.filter(item => item !== "");
// }


// interface CheckboxFieldProps {
//   name: string;
//   label: string;
//   caption?: React.ReactNode;
//   options?: string[];
//   rankings : number [];
//   required?: boolean;
// }

// const NumberDropdownField: React.FC<CheckboxFieldProps> = ({
//   name,
//   label,
//   caption = <></>,
//   options = [],
//   rankings,
//   required
// }) => {
//     const [{}, meta, helpers] = useField({name});   // useField hook to access meta properties
//     const {setValue} = helpers;
//     const [selectedOptions, setSelectedOptions] = useState(new Array(options.length).fill(""))//use a setstate hook to create a state for clicked selections
//     useEffect(() => {
//     setValue(removeEmptyStrings(selectedOptions));
//     }, [selectedOptions]);

//     const handleSelectedOptions = (selectedOption, index) => {
//         let newSelectedOptions = [...selectedOptions];
//         const previousIndex = newSelectedOptions.findIndex((option, idx) => option === selectedOption && index !== idx)
//         if (previousIndex != -1) {    
//             newSelectedOptions[previousIndex] = "";
//         }
//         newSelectedOptions[index] = selectedOption;
//         setSelectedOptions(newSelectedOptions);

//     };
    

//     return (
//     <div className="grid grid-cols-1 mb-5">
//         <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
//         <label htmlFor={name} className="font-semibold">
//         {label}
//         </label>
//         <div>
//         {options.map((option, index) => (
//             <label key={option} className="block">
//             <Field
//                 as="select"
//                 name= {name}
//                 value={selectedOptions[index]}
//                 className={`form-select mt-2 text-charcoal-600 border 'border-charcoal-300'
//                 rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700`}
//                 onChange = {e => {
//                     handleSelectedOptions(e.target.value, index);
//                 }} 
//             >
//                 <option value="">{"-Select rankings-"}</option>
//                 {rankings.map(ranking => (
//                 <option key={`${name}${index}${ranking}`} value={ranking}>{ranking}</option>
//                 ))}
//             </Field>
//             {"    " + option}
//             <label htmlFor={`${name}${index}`} className="font-semibold">
//                 {required && <span className="text-red-600 ml-2">*</span>
//                 }
//             </label>
//             </label>
//         ))}
//         </div>
//         {meta.touched && meta.error ? (
//         <div className="text-red-500 text-sm mt-1">{meta.error}</div>
//       ) : null}
//     </div>
//     );
// };

// export default NumberDropdownField;

import React, { useState, useEffect } from 'react';
import { Field, useField, useFormikContext } from 'formik';

function removeEmptyStrings(array) {
    return array.filter(item => item !== "");
}

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
    const [field, meta, helpers] = useField({ name });
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