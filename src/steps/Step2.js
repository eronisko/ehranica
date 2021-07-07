import React from "react";
import { withWizard } from "react-albus";
import { __ } from "@wordpress/i18n";
import Fieldset from "../components/Fieldset";
import ErrorMessage from "../components/ErrorMessage";
import RadioInputField from "../components/RadioInputField";
import InputField from "../components/InputField";
import * as Yup from "yup";
import Button from "../components/Button";

function Step2({ wizard }) {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        Späť
      </a>

      <Fieldset legend={__('Domáca izolácia členov spoločnej domácnosti', 'ehranica')}>
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <ErrorMessage name="under18HouseholdMemberIsolation" />
          <div className="govuk-radios">
            <RadioInputField
              name="under18HouseholdMemberIsolation"
              value="yes"
            >
              {__('Aspoň 1 osoba v spoločnej domácnosti je v povinnej domácej izolácii.', 'ehranica')}
            </RadioInputField>
            <RadioInputField
              name="under18HouseholdMemberIsolation"
              value="no"
            >
              {__('Nikto v spoločnej domácnosti nie je v povinnej domácej izolácii.', 'ehranica')}
            </RadioInputField>
          </div>
        </div>
      </Fieldset>

      <Button />
    </div>
  );
}

Step2.initialValues = {
  under18HouseholdMemberIsolation: ''
};

Step2.validationSchema = Yup.object({
  under18HouseholdMemberIsolation: Yup.string().required()
});

export default withWizard(Step2);
