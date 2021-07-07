import React from "react";
import Autocomplete from "accessible-autocomplete/react";
import ErrorMessage from "components/ErrorMessage";
import { useField } from "formik";
import cn from "classnames";

import "accessible-autocomplete/src/autocomplete.css";

function AutocompleteField(props) {
  const { label, options } = props;
  // eslint-disable-next-line no-unused-vars
  const [_field, meta, helpers] = useField(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  const hasError = meta.error && meta.touched;

  const id = props.name;

  function suggest(query, populateResults) {
    const filteredResults = options.filter((result) =>
      result.toLowerCase().startsWith(query.toLowerCase())
    );
    populateResults(filteredResults);
  }

  function onConfirm(value) {
    props.onConfirm(value);
    setValue(value);
  }

  function onNotFound() {
    return 'not found';
  }

  const groupClassName = cn("govuk-form-group govuk-!-margin-bottom-3", {
    "govuk-form-group--error": hasError,
  });

  return (
    <div className={groupClassName} style={{ maxWidth: "41ex" }}>
      <label className="govuk-label" htmlFor={id}>
        <strong>{label}</strong>
      </label>
      <ErrorMessage name={props.name} />
      <Autocomplete
        id={id}
        source={suggest}
        showAllValues
        onConfirm={onConfirm}
        tNoResults={onNotFound}
        // confirmOnBlur={false}
        // autoselect={true}
        value={value}
        dropdownArrow={(config) => (
          <svg
            className={config.className}
            style={{ top: "8px" }}
            viewBox="0 0 512 512"
          >
            <path d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9  c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3  z" />
          </svg>
        )}
      />
    </div>
  );
}

export default AutocompleteField;
