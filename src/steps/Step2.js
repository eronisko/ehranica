import React from "react";
import { withWizard } from "react-albus";

function Step2({ wizard }) {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        Späť
      </a>
      <br />
      Step 2!
    </div>
  );
}

export default withWizard(Step2);
