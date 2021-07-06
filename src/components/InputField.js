import React from "react";

import { ErrorMessage, Field } from "formik";

function InputField(props) {
  return (
    <div className="govuk-form-group govuk-!-margin-bottom-3">
      <label className="govuk-label">
        <strong>{props.label}</strong>
      </label>
      <ErrorMessage name={props.name}>
        {(msg) => <span className="govuk-error-message">{msg}</span>}
      </ErrorMessage>
      <Field
        name={props.name}
        type={props.type || "text"}
        className="govuk-input govuk-input--width-20"
      />
    </div>
  );
}

export default InputField;
