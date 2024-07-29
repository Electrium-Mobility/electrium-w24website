import React from 'react';
import { Field, ErrorMessage, useField } from 'formik';

interface RadioTableFieldProps {
  name: string;
  label: string;
  caption?: React.ReactNode;
  rowOptions?: string[];
  columnOptions?: string[];
  required?: boolean;
}

const RadioTableField: React.FC<RadioTableFieldProps> = ({
  name,
  label,
  caption = <></>,
  rowOptions = [],
  columnOptions = [],
  required
}) => {
  const [, meta] = useField(name);  // useField hook to access meta properties

  return (
    <div className="grid grid-cols-1 mb-5">
      <label htmlFor={name} className="font-semibold">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
      <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
        <table>
          <thead>
            <tr>
              <th></th>
              {columnOptions.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowOptions.map((row) => (
              <tr key={row}>
                <td>{row}</td>
                {columnOptions.map((column) => (
                  <td key={`${row}-${column}`}>
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name={`${name}-${row}`}  // Ensure unique name for each skill
                        value={column}  // Column option as value
                        className="form-radio text-green-600 border-green-600 rounded-md"
                      />
                      <span className="ml-2"></span>
                    </label>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default RadioTableField;
