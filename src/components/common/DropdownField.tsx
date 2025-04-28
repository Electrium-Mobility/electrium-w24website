import React from 'react';
import { Field, useField } from 'formik';

interface DropdownFieldProps {
  name: string;
  label: string;
  caption?: React.ReactNode;
  options?: string[];
  required?: boolean;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  name,
  label,
  caption = <></>,
  options = [],
  required
}) => {
  const [, meta] = useField(name);
  const fieldId = `field-${name.replace(/\./g, '-')}`;

  return (
    <div className="grid grid-cols-1 mb-5">
      <label htmlFor={fieldId} className="font-semibold">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="text-gray-500 text-sm">{caption}</div>
      <Field
        as="select"
        id={fieldId}
        name={name}
        className={`form-select mt-2 text-charcoal-600 border ${meta.touched && meta.error ? 'border-red-500' : 'border-charcoal-300'
          } rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700`}
      >
        <option value="">{"-Select option-"}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Field>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default DropdownField;