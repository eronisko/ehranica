import { __ } from "@wordpress/i18n";
import React from "react";

function WarningText(props) {

  return (
    <div className="govuk-warning-text">
      <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">{__('Varovanie', 'ehranica')}</span>
        <span dangerouslySetInnerHTML={{ __html: props.content }}></span>
      </strong>
    </div>
  );
}

export default WarningText;
