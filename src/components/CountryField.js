import React from "react";
import AutocompleteField from "./AutocompleteField";

function CountryField(props) {
  function onConfirm(value) {
    console.log('CountryField.onConfirm', value);
  }

  return (
    <AutocompleteField
      name={props.name}
      onConfirm={onConfirm}
      label={props.label}
      options={countries}
    />
  );
}

const countries = ["France", "Germany", "United Kingdom"];

export default CountryField;
