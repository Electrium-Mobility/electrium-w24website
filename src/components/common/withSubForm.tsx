import { Formik } from "formik";
import React from "react";

const onSubmit = () => {};

export const withSubForm =
  (Component, /*validationSchema*/) =>
  ({ field, form, ...rest }) => {
    const initialValues = field.value;

    return (
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
        children={(props) => (
          <Component
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
