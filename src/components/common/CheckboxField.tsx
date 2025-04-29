import React from 'react';
import { Field, useField } from 'formik';

interface CheckboxFieldProps {
  name: string;
  label: string;
  caption?: React.ReactNode;
  options?: string[];
  required?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  caption = <></>,
  options = [],
  required
}) => {
  const [, meta] = useField({ name, type: 'checkbox' });

  return (
    <div className="grid grid-cols-1 mb-5">
      <label className="font-semibold">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="text-gray-500 text-sm">{caption}</div>
      <div className={`p-4 bg-grey border-2 ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'} rounded-md`}>
        {options.map(option => {
          // Create unique ID for each checkbox option
          const optionId = `${name.replace(/\./g, '-')}-${option.replace(/\s+/g, '-').toLowerCase()}`;

          return (
            <label key={optionId} htmlFor={optionId} className="block mb-2">
              <Field
                type="checkbox"
                id={optionId}
                name={name}
                value={option}
                className="form-checkbox text-charcoal-600 border border-charcoal-300 rounded-md mr-2 focus:outline-none focus:ring-green-700 focus:border-green-700"
              />
              {option}
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

export default CheckboxField;