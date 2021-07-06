import React from "react";
import { Field, useFormikContext } from "formik";
import cn from "classnames";

function RadioInputField({ name, value, conditionalRender, children }) {
  const { values: formValues } = useFormikContext();

  const conditionalExpanded = formValues[name] === value;

  const id = `${name}-${value}`;
  const conditionalId = id + "-conditional";
  const conditionalClasses = cn("govuk-radios__conditional", {
    "govuk-radios__conditional--hidden": !conditionalExpanded,
  });

  return (
    <React.Fragment>
      <div className="govuk-radios__item">
        <Field
          type="radio"
          className="govuk-radios__input"
          id={id}
          name={name}
          value={value}
          aria-controls={conditionalId}
          aria-expanded={conditionalExpanded}
        />
        <label className="govuk-label govuk-radios__label" htmlFor={id}>
          {children}
        </label>
      </div>
      {conditionalRender && (
        <div className={conditionalClasses} id={conditionalId}>
          {conditionalRender}
        </div>
      )}
    </React.Fragment>
  );
}

export default RadioInputField;
