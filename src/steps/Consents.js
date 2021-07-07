import React from "react";
import Button from "components/Button";
import * as Yup from "yup";
import Fieldset from "components/Fieldset";
import { __ } from "@wordpress/i18n";
import CheckboxField from "components/CheckboxField";
import { withWizard } from "react-albus";

function Consents({ wizard }) {
  return (
    <>
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        {__("Späť")}
      </a>

      <Fieldset legend={__("Potvrdenia", "ehranica")}>
        <CheckboxField
          name="personalDataConsent"
          hint={
            <a href="/poucenie-o-ochrane-osobnych-udajov/" target="_blank">
              {__("Poučenie o ochrane osobných údajov", "ehranica")}
            </a>
          }
        >
          {__(
            "Oboznámil(a) som sa s Poučením o ochrane osobných údajov",
            "ehranica"
          )}
        </CheckboxField>
        <CheckboxField name="correctnessStatement">
          {__(
            "Potvrdzujem a prehlasujem, že všetky uvedené údaje sú pravdivé",
            "ehranica"
          )}
        </CheckboxField>
      </Fieldset>

      <Button label={__("Odoslať registráciu")} />
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
