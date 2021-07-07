import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import DateField from "components/Date";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import CountryField from "components/CountryField";
import ErrorMessage from "components/ErrorMessage";
import Fieldset from "components/Fieldset";

function Start({ next }) {
  return (
    <div>
      <Fieldset legend="Zadajte krajinu a dátum príchodu na Slovensko">
        <DateField name="arrivalDate" />
        {/*<CountryField name="originCountry" label="Z ktorej krajiny prichádzate?" />*/}
      </Fieldset>

      <Fieldset legend="Osobné údaje">
        <InputField name="firstName" label="Meno" />
        <InputField name="lastName" label="Priezvisko" />
      </Fieldset>

      <Fieldset legend="Identifikačné číslo">
        <div className="govuk-form-group govuk-!-margin-bottom-1">
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
      </Fieldset>

      <Fieldset legend="Dátum narodenia">
        <DateField name="birthDate" />
      </Fieldset>

      <Fieldset legend="Emailová adresa a telefónne číslo">
        <InputField
          type="email"
          name="email"
          label="Emailová adresa"
          hint="Zadajte email, na ktorý Vám odošleme potvrdenie o registrácii. Potvrdením sa preukážete na hraniciach pri príchode na Slovensko." />
        <InputField
          name="phoneNumber"
          label="Telefónne číslo (s ktorým ste pricestovali zo zahraničia)"
          hint="Zadajte aj s medzinárodnou predvoľbou, napríklad +421 pre slovenské čísla."
        />
        <InputField
          name="phoneNumberVerification"
          label="Zadajte telefónne číslo ešte raz"
          hint="Pozorne si skontrolujte, či ste vo Vašom telefónnom čísle omylom nezamenili niektorú číslicu."
        />
      </Fieldset>

      <Button />
    </div>
  );
}

const today = new Date();

Start.initialValues = {
  firstName: "",
  lastName: "",
  arrivalDate: {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  },
  birthDate: {
    day: '',
    month: '',
    year: '',
  },
  idType: "slovak",
  idSlovak: "",
  idForeign: "",
  // originCountry: "",
  email: "",
  phoneNumber: "",
  phoneNumberVerification: "",
};

Yup.addMethod(Yup.object, "isValidDate", function (errorMessage) {
  return this.test(`test-valid-date`, errorMessage, function (value) {
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

Yup.addMethod(Yup.string, "isAllowedPhoneNumber", function (errorMessage) {
  return this.test(`test-allowed-phone-number`, errorMessage, function (value) {
    const { path, createError } = this;
    return (value && /^(\+|00)\d{8}\d*$/.test(value.replace(/[ \-\(\)]/g, ''))) || createError({ path, message: errorMessage });
  });
});

Start.validationSchema = Yup.object({
  firstName: Yup.string().required("Zadajte meno."),
  lastName: Yup.string().required("Zadajte priezvisko."),
  arrivalDate: Yup.object().isValidDate(
    "Zadajte správny deň a mesiac príchodu."
  ),
  birthDate: Yup.object().isValidDate(
    "Zadajte správny deň, mesiac a rok narodenia."
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
  // originCountry: Yup.string().required(),
  email: Yup.string().required('Zadajte správnu emailovú adresu.'),
  phoneNumber: Yup.string().isAllowedPhoneNumber('Zadajte správne telefónne číslo. Musí začínať medzinárodnou predvoľbou + alebo 00.'),
  phoneNumberVerification: Yup.string()
    .isAllowedPhoneNumber('Zadajte správne telefónne číslo. Musí začínať medzinárodnou predvoľbou + alebo 00.')
    .oneOf([Yup.ref('phoneNumber'), null], 'Zadané telefónne číslo nie je rovnaké ako v predchádzajúcom políčku.')
});

export default Start;
