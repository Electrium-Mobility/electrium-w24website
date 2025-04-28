import React from 'react';
import { Field, useField } from 'formik';

interface RadioFieldProps {
  name: string;
  label: string;
  caption?: React.ReactNode;
  options?: string[];
  value?: string;
  required?: boolean;
}

const RadioField: React.FC<RadioFieldProps> = ({
  name,
  label,
  caption = <></>,
  options = [],
  value = "",
  required
}) => {
  const [, meta] = useField(name);
  
  return (
    <div className="grid grid-cols-1 mb-5">
      <label className="font-semibold">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="text-gray-500 text-sm">{caption}</div>
      <div className={`p-4 bg-grey border-2 ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'} rounded-md`}>
        {options.map(option => {
          // Create unique ID for each radio option
          const optionId = `${name.replace(/\./g, '-')}-${option.replace(/\s+/g, '-').toLowerCase()}`;
          
          return (
            <label key={optionId} htmlFor={optionId} className="flex items-center mb-2">
              <Field
                type="radio"
                id={optionId}
                name={name}
                value={option}
                className="form-radio text-green-600 border-green-600 rounded-md mr-2"
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default RadioField;