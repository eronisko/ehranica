import React from "react";
import { Field, useField } from "formik";
import cn from "classnames";
import ErrorMessage from "components/ErrorMessage";
import PropTypes from "prop-types";

function CheckboxField({ name, hint, children }) {
  const [_field, meta] = useField(name);

  const hasError = meta.error && meta.touched;

  const groupClassName = cn("govuk-form-group", {
    "govuk-form-group--error": hasError,
  });

  const id = name;

  return (
    <div class={groupClassName}>
      <ErrorMessage name={name} />
      <div class="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <Field
            id={id}
            className="govuk-checkboxes__input"
            name={name}
            type="checkbox"
            // aria-describedby="uc-confirm-error"
          />
          <label class="govuk-label govuk-checkboxes__label" htmlFor={id}>
            {children}
          </label>
          <span class="govuk-hint govuk-checkboxes__hint">{hint}</span>
        </div>
      </div>
    </div>
  );
}

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CheckboxField;
