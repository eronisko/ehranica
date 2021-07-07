import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import DateField from "components/Date";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import AutocompleteField from "components/AutocompleteField";
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
      <DateField name="arrivalDate" label="Dátum príchodu na Slovensko" />
      <div className="govuk-form-group govuk-!-margin-bottom-1">
        <label className="govuk-label">
          <strong>Identifikačné číslo</strong>
        </label>
        <ErrorMessage name="idType" />
        <div className="govuk-radios">
          <RadioInputField
            name="idType"
            value="slovak"
            conditionalRender={<InputField name="idSlovak" />}
          >
            Slovenské rodné číslo alebo BIČ
          </RadioInputField>
          <RadioInputField
            name="idType"
            value="foreign"
            conditionalRender={
              <InputField
                name="idForeign"
                hint="Vyplňte iba ak nemáte slovenské rodné číslo alebo BIČ."
              />
            }
          >
            ID pridelené inou krajinou
          </RadioInputField>
        </div>
      </div>
      <AutocompleteField
        name="originCountry"
        label="Z ktorej krajiny ste prišli?"
        options={countries}
      />
      <Button />
    </div>
  );
}

const countries = ["France", "Germany", "United Kingdom"];

const today = new Date();

Start.initialValues = {
  firstName: "",
  arrivalDate: {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  },
  idType: "slovak",
  idSlovak: "",
  idForeign: "",
  originCountry: "",
};

Yup.addMethod(Yup.object, "isValidArrivalDate", function (errorMessage) {
  return this.test(`test-card-type`, errorMessage, function (value) {
    const { path, createError } = this;

    const day = parseInt(value.day);
    const month = parseInt(value.month);
    const year = parseInt(value.year);

    let result = [];

    if (isNaN(day) || day < 1 || day > 31) {
      result.push("day");
    }

    if (isNaN(month) || month < 1 || month > 12) {
      result.push("month");
    }

    if (isNaN(year) || year < 1900 || year > 2030) {
      result.push("year");
    }

    return 0 === result.length || createError({ path, message: errorMessage });
  });
});

Start.validationSchema = Yup.object({
  firstName: Yup.string().required("Zadajte meno."),
  arrivalDate: Yup.object().isValidArrivalDate(
    "Zadajte správny deň a mesiac príchodu."
  ),
  idType: Yup.string().oneOf(["slovak", "foreign"]).required(),
  idSlovak: Yup.string().when(["idType"], {
    is: "slovak",
    then: Yup.string().required("Zadajte správne rodné číslo alebo BIČ."),
  }),
  idForeign: Yup.string().when(["idType"], {
    is: "foreign",
    then: Yup.string().required("Zadajte správne ID pridelené inou krajinou."),
  }),
  originCountry: Yup.string().oneOf(countries).required(),
});

export default Start;
