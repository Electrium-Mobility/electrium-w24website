import { Formik } from "formik";
import React from "react";

const onSubmit = () => {};

export const withSubForm =
  (Component) =>
  ({setValidation, field, form, ...rest }) => {
    const initialValues = field.value;

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        children={(props) => (
          <Component
            setValidation = {setValidation}
            {...props}
            {...rest}
            setFieldValue={form.setFieldValue}
            setFieldError={form.setFieldError}
            setErrors={form.setErrors}
            name={field.name}
          />
        )}
      />
    );
  };
