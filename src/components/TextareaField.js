import React from "react";
import { Field, useFormikContext } from "formik";
import cn from "classnames";
import ErrorMessage from "components/ErrorMessage";

function InputField(props) {
  const { errors, touched } = useFormikContext();
  const hasError = errors[props.name] && touched[props.name];
  const groupClassName = cn("govuk-form-group govuk-!-margin-bottom-3", {
    "govuk-form-group--error": hasError,
  });
  const fieldClassName = cn("govuk-textarea govuk-input--width-20", {
    "govuk-textarea--error": hasError,
  });

  return (
    <div className={groupClassName}>
      <label className="govuk-label" htmlFor={props.name}>
        <strong>{props.label}</strong>
      </label>
      <div className="govuk-hint">{props.hint}</div>
      <ErrorMessage name={props.name} />
      <Field
        id={props.name}
        name={props.name}
        as="textarea"
        className={fieldClassName}
        rows="5"
      />
    </div>
  );
}

export default InputField;
