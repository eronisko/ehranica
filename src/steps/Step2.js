import React from "react";
import { withWizard } from "react-albus";
import { __ } from "@wordpress/i18n";

function Step2({ wizard }) {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        {__('Späť', 'ehranica')}
      </a>
      <br />
      {__('Step 2!', 'ehranica')}
    </div>
  );
}

export default withWizard(Step2);
