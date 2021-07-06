import React from "react";

function Step2({ next, previous }) {
  return (
    <div>
      <a className="govuk-back-link" href="#" onClick={previous}>
        Späť
      </a>
      <br />
      Step 2!
    </div>
  );
}

export default Step2;
