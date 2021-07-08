import React from "react";
import Button from "components/Button";
import * as Yup from "yup";
import Fieldset from "components/Fieldset";
import CheckboxField from "components/CheckboxField";
import { withWizard } from "react-albus";
import { useTranslation } from "react-i18next";
import { __ } from "@wordpress/i18n";

function Consents({ wizard }) {
  const {t, i18n} = useTranslation('global');
  return (
    <>
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        {t("navigation.back")}
      </a>
      <Fieldset legend={t("confirmationLegend")}>
        <CheckboxField
          name="personalDataConsent"
          hint={
            <a href="/poucenie-o-ochrane-osobnych-udajov/" target="_blank">
              {t("dataConsent.linkText")}
            </a>
          }
        >
          {t("dataConsent.text")}
        </CheckboxField>
        <CheckboxField name="correctnessStatement">
          {t("correctnessStatement.text")}
        </CheckboxField>
      </Fieldset>
      <Button label={t("navigation.sendRegistration")} />{" "} 
    </>
  );
}

let step = withWizard(Consents);

step.initialValues = {
  personalDataConsent: false,
  correctnessStatement: false,
};

step.validationSchema = Yup.object({
  personalDataConsent: Yup.bool().oneOf(
    [true],
    __("Prosím, akceptujte súhlas so spracovaním osobných údajov.", "ehranica")
  ),
  correctnessStatement: Yup.bool().oneOf(
    [true],
    __("Prosím, potvrďte správnosť zadaných údajov.", "ehranica")
  ),
});

export default step;
