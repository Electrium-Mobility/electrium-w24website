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
  const [, meta] = useField(name);  // useField hook to access meta properties

  return (
    <div className="grid grid-cols-1 mb-5">
      <label htmlFor={name} className="font-semibold">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
      <div className={`p-4 bg-grey border-2 ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'} rounded-md`}>
        {options.map(option => (
          <label key={option} className="flex items-center">
            <Field
              type="radio"
              id={`${name}-${option}`}  // Ensure unique id for each radio option
              name={name}
              value={option}
              className="form-radio text-green-600 border-green-600 rounded-md"
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default RadioField;
