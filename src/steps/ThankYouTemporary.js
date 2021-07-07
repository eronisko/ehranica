import React from "react";
import { withWizard } from "react-albus";

function ThankYouTemporary({ wizard }) {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        Späť
      </a>

      <p>Dakujeme.</p>
    </div>
  );
}

export default withWizard(ThankYouTemporary);
