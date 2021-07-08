import React from "react";

function Panel(props) {
  const isError = props.isError || false;

  return (
    <div
      className="govuk-panel govuk-panel--confirmation"
      style={isError ? { backgroundColor: "#D0190F" } : undefined}
    >
      {props.heading && (
        <h1
          className="govuk-panel__title"
          dangerouslySetInnerHTML={{ __html: props.heading }}
        ></h1>
      )}
      {props.body && (
        <div
          className="govuk-panel__body"
          dangerouslySetInnerHTML={{ __html: props.body }}
        ></div>
      )}
    </div>
  );
}

export default Panel;
