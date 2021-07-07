import React from "react";
import { withWizard } from "react-albus";
import { __ } from "@wordpress/i18n";
import Fieldset from "../components/Fieldset";
import ErrorMessage from "../components/ErrorMessage";
import RadioInputField from "../components/RadioInputField";
import InputField from "../components/InputField";
import * as Yup from "yup";
import Button from "../components/Button";
import { Field, useFormikContext } from "formik";
import { age } from "helpers/Helpers";

function AgeDependent({ wizard }) {
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
        <Fieldset legend={__("Očkovanie proti COVID-19", "ehranica")}>
          <div className="govuk-form-group govuk-!-margin-bottom-1">
            <details className="govuk-details" data-module="govuk-details">
              <summary className="govuk-details__summary">
                <span className="govuk-details__summary-text">
                  {__("Kto je plne zaočkovaná osoba?", "ehranica")}
                </span>
              </summary>
              <div
                className="govuk-details__text"
                dangerouslySetInnerHTML={{
                  __html: __(
                    "<p>a) osoba najmenej 14 dní ale nie viac než 12 mesiacov po aplikácii druhej dávky očkovacej látky proti ochoreniu COVID-19 s dvojdávkovou schémou,</p><p>b) osoba najmenej 21 dní ale nie viac než 12 mesiacov po aplikácii prvej dávky očkovacej látky proti ochoreniu COVID-19 s jednodávkovou schémou,</p><p>c) sú najmenej 14 dní a nie viac než 12 mesiacov po aplikácii prvej dávky očkovacej látky proti ochoreniu COVID-19, ak bola prvá dávka očkovania proti ochoreniu COVID-19 podaná v intervale do 180 dní od prekonania ochorenia COVID-19,</p>",
                    "ehranica"
                  ),
                }}
              />
            </details>

            <ErrorMessage name="isVaccinated" />
            <div className="govuk-radios">
              <RadioInputField name="isVaccinated" value="fully">
                {__(
                  "Som plne zaočkovaná osoba a mám o tom doklad.",
                  "ehranica"
                )}
              </RadioInputField>
              <RadioInputField name="isVaccinated" value="partially">
                {__(
                  "Som zaočkovaná osoba aspoň 1 dávkou a mám o tom doklad.",
                  "ehranica"
                )}
              </RadioInputField>
              <RadioInputField name="isVaccinated" value="no">
                {__("Nie som zaočkovaná osoba.", "ehranica")}
              </RadioInputField>
            </div>
          </div>
        </Fieldset>
      )}

      {!values.isAdult && (
        <Fieldset
          legend={__("Domáca izolácia členov spoločnej domácnosti", "ehranica")}
        >
          <div className="govuk-form-group govuk-!-margin-bottom-1">
            <ErrorMessage name="hasHouseholdMemberInIsolation" />
            <div className="govuk-radios">
              <RadioInputField name="hasHouseholdMemberInIsolation" value="yes">
                {__(
                  "Aspoň 1 osoba v spoločnej domácnosti je v povinnej domácej izolácii.",
                  "ehranica"
                )}
              </RadioInputField>
              <RadioInputField name="hasHouseholdMemberInIsolation" value="no">
                {__(
                  "Nikto v spoločnej domácnosti nie je v povinnej domácej izolácii.",
                  "ehranica"
                )}
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
    then: Yup.string().required(__("Vyberte si jednu z možností.")),
  }),
  hasHouseholdMemberInIsolation: Yup.string().when(["isAdult"], {
    is: false,
    then: Yup.string().required(__("Vyberte si jednu z možností.")),
  }),
});

export default step;
