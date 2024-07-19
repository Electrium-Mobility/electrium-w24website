import React from "react";
import { FunctionComponent } from "react";
import { FormikErrors, Field } from "formik";

interface IUploadField {
  name: string;
  label: string;
  caption?: React.ReactNode;
  required?: boolean;
  data: { image?: File };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<{ image?: File }>> | Promise<void>;
  errors?: FormikErrors<{ image?: File }>;
}

const UploadField: FunctionComponent<IUploadField> = ({
  name,
  label,
  caption = <></>,
  data,
  setFieldValue,
  errors,
  required
}) => {
  return (
    <div className="grid grid-cols-1 mb-5">
      <label htmlFor={name} className="font-semibold mb-5">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <label htmlFor={name} className="text-gray-500 text-sm">{caption}</label>
      <Field name={name}>
        {({ field, form }) => (
          <div>
            <input
              type="file"
              name={name}
              onChange={(e) => {
                if (e.currentTarget.files) {
                  setFieldValue(name, e.currentTarget.files[0]);
                }
              }}
            />
            {form.errors[name] && form.touched[name] && (
              <>
                <br />
                <span id="error" className="text-red-600">{form.errors[name]}</span>
                <br />
              </>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default UploadField;
