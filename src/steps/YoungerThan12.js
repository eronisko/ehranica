import React from "react";
import { withWizard } from "react-albus";

function YoungerThan12({ wizard }) {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        Späť
      </a>

      <p>Mate menej ako 12 rokov. Nemusite sa registrovat.</p>
    </div>
  );
}

export default withWizard(YoungerThan12);
