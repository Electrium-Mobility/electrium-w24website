import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface TextFieldProps {
  name: string;
  label: string;
  caption?: React.ReactNode;
  type?: string;
  placeholder?: string;
  image?: string;
  required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  caption = <></>,
  type = "text",
  placeholder = "",
  image = "",
  required
}) => (
  <div className="grid grid-cols-1 mb-5">
    <label htmlFor={name} className="font-semibold">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
    <div className="flex items-center">
      {image && <img src={image} alt={label} className="w-15 h-auto m-3" />}
    </div>
    <Field name={name}>
      {({ field, meta }) => (
        <div>
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...field}
            className={`form-input mt-2 text-charcoal-600 border ${
              meta.touched && meta.error ? 'border-red-500' : 'border-charcoal-300'
            } rounded-md w-2/3 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700`}
          />
          {meta.touched && meta.error ? (
            <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          ) : null}
        </div>
      )}
    </Field>
  </div>
);

export default TextField;
