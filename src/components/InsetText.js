import React from "react";

function InsetText(props) {

  return (
    <div className="govuk-inset-text" dangerouslySetInnerHTML={{ __html: props.content }}>
    </div>
  );
}

export default InsetText;
