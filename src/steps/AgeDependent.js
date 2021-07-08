import React from "react";
import { withWizard } from "react-albus";
import Fieldset from "../components/Fieldset";
import ErrorMessage from "../components/ErrorMessage";
import RadioInputField from "../components/RadioInputField";
import InputField from "../components/InputField";
import * as Yup from "yup";
import Button from "../components/Button";
import { Field, useFormikContext } from "formik";
import { age } from "helpers/Helpers";

import {useTranslation} from "react-i18next";
import {__} from "@wordpress/i18n";

function AgeDependent({ wizard }) {
  const {t, i18n} = useTranslation('common');
  const { values } = useFormikContext();
  const isAdult = values.isAdult;
  const isButtonDisabled =
    (isAdult && !values.isVaccinated) ||
    (!isAdult && !values.hasHouseholdMemberInIsolation);

  values.exceptionId = null;

  if (isAdult) {
    if (values.isVaccinated === "fully") {
      values.exceptionId = 2;
    }

    if (values.isVaccinated === "partially") {
      values.exceptionId = 3;
    }
  } else {
    if (values.hasHouseholdMemberInIsolation === "no") {
      values.exceptionId = 1;
    }
  }

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        Späť
      </a>
      <Field type="hidden" name="age" />
      <Field type="hidden" name="isAdult" />

      {values.isAdult && (
        <Fieldset legend={t("ageDependent.legend")}>
          <div className="govuk-form-group govuk-!-margin-bottom-1">
            <details className="govuk-details" data-module="govuk-details">
              <summary className="govuk-details__summary">
                <span className="govuk-details__summary-text">
                  {t("ageDependent.detailsHeading")}
                </span>
              </summary>
              <div
                className="govuk-details__text"
                dangerouslySetInnerHTML={{
                  __html: t("ageDependent.detailsBody"),
                }}
              />
            </details>

            <ErrorMessage name="isVaccinated" />
            <div className="govuk-radios">
              <RadioInputField name="isVaccinated" value="fully">
                {t("ageDependent.vacinatedFully")}
              </RadioInputField>
              <RadioInputField name="isVaccinated" value="partially">
                {t("ageDependent.vacinatedPartially")}
              </RadioInputField>
              <RadioInputField name="isVaccinated" value="no">
                {t("ageDependent.vacinatedNo")}
              </RadioInputField>
            </div>
          </div>
        </Fieldset>
      )}

      {!values.isAdult && (
        <Fieldset
          legend={t("ageDependent.noAdultLegend")}
        >
          <div className="govuk-form-group govuk-!-margin-bottom-1">
            <ErrorMessage name="hasHouseholdMemberInIsolation" />
            <div className="govuk-radios">
              <RadioInputField name="hasHouseholdMemberInIsolation" value="yes">
                {t("ageDependent.noAdultIsolationYes")}
              </RadioInputField>
              <RadioInputField name="hasHouseholdMemberInIsolation" value="no">
                {t("ageDependent.noAdultIsolationNo")}
              </RadioInputField>
            </div>
          </div>
        </Fieldset>
      )}

      <Button disabled={isButtonDisabled} />
    </div>
  );
}

let step = withWizard(AgeDependent);

step.initialValues = {
  isAdult: "",
  age: "",
  isVaccinated: "",
  hasHouseholdMemberInIsolation: "",
};

step.validationSchema = Yup.object({
  isVaccinated: Yup.string().when(["isAdult"], {
    is: true,
    then: Yup.string().required(__("Vyberte si jednu z možností.")/*__("Vyberte si jednu z možností.")*/),
  }),
  hasHouseholdMemberInIsolation: Yup.string().when(["isAdult"], {
    is: false,
    then: Yup.string().required(__("Vyberte si jednu z možností.")),/*t("ageDependent.chooseOne")*/
  }),
});

export default step;
