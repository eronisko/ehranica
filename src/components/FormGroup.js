import React from "react";
import { useField } from "formik";
import cn from "classnames";
import ErrorMessage from "components/ErrorMessage";

function FormGroup(props) {
  const [_field, meta] = useField(props.name);

  const hasError = meta.error && meta.touched;

  const className = cn("govuk-form-group govuk-!-margin-bottom-1", {
    "govuk-form-group--error": hasError,
  });

  return (
    <div className={className}>
      <ErrorMessage name={props.name} />
      {props.children}
    </div>
  );
}

export default FormGroup;
