import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import * as Yup from "yup";

function Start({ next }) {
  return (
    <div>
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
        <h2 class="govuk-fieldset__heading">
          Zadajte krajinu a dátum príchodu na Slovensko
        </h2>
      </legend>

      <InputField name="firstName" label="Meno" />
      <Button />
    </div>
  );
}

Start.initialValues = {
  firstName: "",
};

Start.validationSchema = Yup.object({
  firstName: Yup.string()
    .max(5, "Must be 5 characters or less")
    .required("Required"),
});

export default Start;
