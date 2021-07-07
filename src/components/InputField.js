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
  const fieldClassName = cn("govuk-input govuk-input--width-20", {
    "govuk-input--error": hasError,
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
        type={props.type || "text"}
        className={fieldClassName}
      />
    </div>
  );
}

export default InputField;
