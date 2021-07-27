import React, { useRef } from "react";
import uuid from "react-uuid";
import cn from "classnames";
import Autocomplete from "accessible-autocomplete/react";
import ErrorMessage from "components/ErrorMessage";
import PropTypes from "prop-types";
import { useField } from "formik";

import "accessible-autocomplete/src/autocomplete.css";

function AutocompleteField(props) {
  const id = useRef(uuid());
  const element = useRef();
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(props.name);
  const { label } = props;
  const { setValue, setTouched } = helpers;

  const groupClassName = cn("govuk-form-group govuk-!-margin-bottom-3", {
    "govuk-form-group--error": meta.error && meta.touched,
  });

  function onConfirm(value) {
    const state = element.current.state;

    setTouched();

    if (value) {
      setValue(props.getFormValue ? props.getFormValue(value) : value);
      props.onFieldValueChange && props.onFieldValueChange(value);
      return;
    }

    if (state.validChoiceMade) {
      // no op
      return;
    }

    // Otherwise, set to an empty value
    setValue("");
    props.onFieldValueChange && props.onFieldValueChange("");
  }

  return (
    <div className={groupClassName} style={{ display: "flex" }}>
      <div className="govuk-input--width-20" style={{ flexBasis: "41ex" }}>
        <label className="govuk-label" htmlFor={id.current}>
          <strong>{label}</strong>
        </label>
        <span className="govuk-hint govuk-input__hint">{props.hint}</span>
        <ErrorMessage name={props.name} />
        <Autocomplete
          ref={element}
          id={id.current}
          name={id.current} // Disables autocomplete: https://github.com/alphagov/accessible-autocomplete/issues/325#issuecomment-788793902
          showAllValues
          autoselect
          source={props.source}
          templates={props.templates}
          onConfirm={onConfirm}
          tNoResults={props.tNoResults}
          tAssistiveHint={props.tAssistiveHint}
          dropdownArrow={(config) => (
            <svg
              className={config.className}
              style={{ top: "8px" }}
              viewBox="0 0 512 512"
            >
              <path d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9  c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3  z" />
            </svg>
          )}
          defaultValue={props.defaultValue}
        />
      </div>
      {props.controls}
    </div>
  );
}

AutocompleteField.propTypes = {
  source: PropTypes.func.isRequired,
  getFormValue: PropTypes.func,
  onFieldValueChange: PropTypes.func,
};

export default AutocompleteField;
