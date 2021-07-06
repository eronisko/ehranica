import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import ErrorMessage from "components/ErrorMessage";

function Start({ next }) {
  return (
    <div>
      <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
        <h2 className="govuk-fieldset__heading">
          Zadajte krajinu a dátum príchodu na Slovensko
        </h2>
      </legend>

      <InputField name="firstName" label="Meno" />

      <div className="govuk-form-group govuk-!-margin-bottom-1">
        <label className="govuk-label">
          <strong>Identifikačné číslo</strong>
        </label>
        <ErrorMessage name="idType" />
        {/* Zadajte správne rodné číslo, BIČ alebo ID pridelené inou krajinou.{" "} */}
        <div
          className="govuk-radios govuk-radios--conditional"
          data-module="govuk-radios"
        >
          <RadioInputField name="idType" value="slovak">
            Slovenské rodné číslo alebo BIČ
          </RadioInputField>
          <RadioInputField name="idType" value="foreign">
            ID pridelené inou krajinou
          </RadioInputField>
        </div>
      </div>
      <Button />
    </div>
  );
}

Start.initialValues = {
  firstName: "",
  idType: "",
};

Start.validationSchema = Yup.object({
  firstName: Yup.string().max(5, "Must be 5 characters or less").required(),
  idType: Yup.string().oneOf(["slovak", "foreign"]).required(),
});

export default Start;
