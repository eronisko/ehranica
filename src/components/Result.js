import React from "react";
import Panel from "./Panel";
import { useTranslation } from "react-i18next";
import InsetText from "./InsetText";
import WarningText from "./WarningText";

function Result(props) {
  const { t } = useTranslation("common");
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Panel
        isError={props.isError || false}
        heading={props.title}
        body={props.body}
      />
      <InsetText content={t("component.result.insetContent")} />
      <WarningText content={t("component.result.warningText")} />
      <p
        className="govuk-body"
        dangerouslySetInnerHTML={{
          __html: t("component.result.additionalInfo"),
        }}
      />
      <p className="govuk-body">
        <a
          className="govuk-link"
          href="https://korona.gov.sk/ehranica/prieskum-spokojnosti/"
          title={t("component.result.ratingLink")}
        >
          {t("component.result.ratingLink")}
        </a>
      </p>
      <h2 className="govuk-heading-m">{t("component.result.nextActions")}</h2>
      <div className="govuk-button-group">
        <a
          href="."
          className="govuk-button govuk-button--secondary"
          data-module="govuk-button"
        >
          {t("component.result.registerNextPerson")}
        </a>
        <a
          href="https://korona.gov.sk"
          className="govuk-button govuk-button--secondary govuk-!-margin-left-5"
          data-module="govuk-button"
        >
          {t("component.result.backKorona")}
        </a>
      </div>
    </div>
  );
}

export default Result;
