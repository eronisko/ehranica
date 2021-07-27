import React from "react";
import Button from "components/Button";
import * as Yup from "yup";
import Fieldset from "components/Fieldset";
import CheckboxField from "components/CheckboxField";
import { withWizard } from "react-albus";
import { useTranslation } from "react-i18next";

function Consents({ wizard }) {
  const { t, i18n } = useTranslation("common");

  const consentLink =
    i18n.language === "en"
      ? "/en/information-on-personal-data-protection/"
      : "/poucenie-o-ochrane-osobnych-udajov/";

  return (
    <>
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        {t("global.navigation.back")}
      </a>
      <Fieldset legend={t("global.confirmationLegend")}>
        <CheckboxField
          name="personalDataConsent"
          hint={
            <a href={consentLink} class="govuk-link" target="_blank">
              {t("global.dataConsent.linkText")}
            </a>
          }
        >
          {t("global.dataConsent.text")}
        </CheckboxField>
        <CheckboxField name="correctnessStatement">
          {t("global.correctnessStatement.text")}
        </CheckboxField>
      </Fieldset>
      <Button label={t("global.navigation.sendRegistration")} />{" "}
    </>
  );
}

let step = withWizard(Consents);

step.initialValues = {
  personalDataConsent: false,
  correctnessStatement: false,
};

step.validationSchema = Yup.object({
  personalDataConsent: Yup.bool().oneOf([true], "required.dataConsent"),
  correctnessStatement: Yup.bool().oneOf(
    [true],
    "required.correctnessStatement"
  ),
});

export default step;
