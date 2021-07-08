import { useTranslation } from "react-i18next";
import React from "react";

function WarningText(props) {
  const {t} = useTranslation('common');

  return (
    <div className="govuk-warning-text">
      <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">{t("component.warningText.warning")}</span>
        <span dangerouslySetInnerHTML={{ __html: props.content }}></span>
      </strong>
    </div>
  );
}

export default WarningText;
