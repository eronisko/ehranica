import React from "react";
import Fieldset from "../components/Fieldset";
import ErrorMessage from "../components/ErrorMessage";
import RadioInputField from "../components/RadioInputField";
import { useFormikContext } from "formik";
import WithoutTest from "./Start/WithoutTest";
import Pcr72Hours from "./Start/Pcr72Hours";
import Ag7Days from "./Start/Ag7Days";
import Pcr7Days from "./Start/Pcr7Days";
import { useTranslation } from "react-i18next";

function Start(props) {
  const {t} = useTranslation('common');
  const { values } = useFormikContext();

  return (
    <div>
      <div className="govuk-warning-text">
        <span className="govuk-warning-text__icon" aria-hidden="true">
          !
        </span>
        <strong className="govuk-warning-text__text">
          <span className="govuk-warning-text__assistive">
            {t("exceptions.start.warning")}
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: t("exceptions.start.warningBody")
            }}
          />
        </strong>
      </div>

      <Fieldset
        legend={t("exceptions.start.noExceptionLabel")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <ErrorMessage name="exception" />
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionStart"
              value="noException"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.start.noException")
              }}
            />
          </div>
        </div>
      </Fieldset>
      <Fieldset
        legend={t("exceptions.start.hasException.label")}
      >
        <p className="govuk-body">
          {t("exceptions.start.hasException.hint")}
        </p>
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionStart"
              value="WithoutTest"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.start.hasException.withoutTest")
              }}
            />
            <RadioInputField
              name="exceptionStart"
              value="Pcr72Hours"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.start.hasException.pcr72Hours")
              }}
            />
            <RadioInputField
              name="exceptionStart"
              value="Pcr7Days"
              insetText={t("exceptions.start.hasException.pcr7DaysHint"
              )}
              alwaysExpandedInsetText={true}
              dangerouslySetInnerHTML={{
                __html: t("exceptions.start.hasException.pcr7Days")
              }}
            />
            <RadioInputField
              name="exceptionStart"
              value="Ag7Days"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.start.hasException.ag7Days")
              }}
            />
          </div>
        </div>
      </Fieldset>

      {values.exceptionStart === "WithoutTest" && <WithoutTest />}
      {values.exceptionStart === "Pcr72Hours" && <Pcr72Hours />}
      {values.exceptionStart === "Pcr7Days" && <Pcr7Days />}
      {values.exceptionStart === "Ag7Days" && <Ag7Days />}
    </div>
  );
}

export default Start;
