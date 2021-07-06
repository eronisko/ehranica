import React from "react";

import Button from "components/Button";

function Start({ next }) {
  return (
    <div>
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
        <h2 class="govuk-fieldset__heading">
          Zadajte krajinu a dátum príchodu na Slovensko
        </h2>
      </legend>
      <Button onClick={next} />
    </div>
  );
}

export default Start;
