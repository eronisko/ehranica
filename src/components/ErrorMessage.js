import React from "react";
import { ErrorMessage as FormikErrorMessage } from "formik";

function ErrorMessage({ name }) {
  return (
    <FormikErrorMessage name={name}>
      {(msg) => <span className="govuk-error-message">{msg}</span>}
    </FormikErrorMessage>
  );
}

export default ErrorMessage;
