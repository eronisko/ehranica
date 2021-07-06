import React from "react";
import { Field } from "formik";

function RadioInputField({ name, value, children }) {
  const id = `${name}-${value}}`;
  return (
    <div className="govuk-radios__item">
      <Field
        type="radio"
        className="govuk-radios__input"
        id={id}
        name={name}
        value={value}
        // data-aria-controls="id-type-conditional-slovak-1"
      />
      <label className="govuk-label govuk-radios__label" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

export default RadioInputField;
