import React from "react";

function Fieldset(props) {

  return (
    <fieldset className="govuk-fieldset govuk-!-margin-bottom-5" role="group">
      {props.legend && <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
        <h2 className="govuk-fieldset__heading">{props.legend}</h2>
      </legend>}

      {props.children}
    </fieldset>
  );
}

export default Fieldset;
