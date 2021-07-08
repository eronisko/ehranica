import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import DateField from "components/Date";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import CountryField, { Countries } from "components/CountryField";
import ErrorMessage from "components/ErrorMessage";
import Fieldset from "components/Fieldset";
import Link from "components/Link";
import { FieldArray, useFormikContext } from "formik";
import {
  validDate,
  allowedPhoneNumber,
  slovakId,
  birthNumberToDate,
} from "validations/Validations";
import { __ } from "@wordpress/i18n";

function getCountryFieldLabel(index) {
  if (index === 0) return __("Z ktorej krajiny ste prišli?", "ehranica");
  if (index === 1)
    return __(
      "Ktoré ďalšie krajiny ste navštívili za posledných 14 dní?",
      "ehranica"
    );
}

function Start() {
  const { values } = useFormikContext();

  if (values.idType === "slovak") {
    const birthDateParts = birthNumberToDate(values.idSlovak);

    if (birthDateParts.length === 3) {
      values.birthDate.day = birthDateParts[0];
      values.birthDate.month = birthDateParts[1];
      values.birthDate.year = birthDateParts[2];
    }
  }

  return (
    <div>
      <Fieldset
        legend={__("Zadajte krajinu a dátum príchodu na Slovensko", "ehranica")}
      >
        <DateField name="arrivalDate" />
        <FieldArray name="originCountries">
          {({ remove, push }) => (
            <>
              {values.originCountries.map((country, index) => (
                <CountryField
                  key={`originCountries.${index}-${values.originCountries[index]}`}
                  name={`originCountries.${index}`}
                  label={getCountryFieldLabel(index)}
                  controls={
                    index > 0 && (
                      <Link
                        onClick={() => remove(index)}
                        style={{
                          alignSelf: "flex-end",
                          display: "inline-block",
                          marginLeft: "2ex",
                          marginBottom: ".5ex",
                        }}
                      >
                        {__("Zrušiť", "ehranica")}
                      </Link>
                    )
                  }
                />
              ))}
              <Link onClick={() => push("")}>
                {__("Pridať ďalšiu navštívenú krajinu", "ehranica")}
              </Link>
            </>
          )}
        </FieldArray>
        <div className="govuk-!-margin-bottom-3"></div>
      </Fieldset>

      <Fieldset legend={__("Osobné údaje", "ehranica")}>
        <InputField name="firstName" label={__("Meno", "ehranica")} />
        <InputField name="lastName" label={__("Priezvisko", "ehranica")} />
      </Fieldset>

      <Fieldset legend={__("Identifikačné číslo", "ehranica")}>
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <ErrorMessage name="idType" />
          <div className="govuk-radios">
            <RadioInputField
              name="idType"
              value="slovak"
              conditionalRender={<InputField name="idSlovak" />}
            >
              {__("Slovenské rodné číslo alebo BIČ", "ehranica")}
            </RadioInputField>
            <RadioInputField
              name="idType"
              value="foreign"
              conditionalRender={
                <InputField
                  name="idForeign"
                  hint={__(
                    "Vyplňte iba ak nemáte slovenské rodné číslo alebo BIČ.",
                    "ehranica"
                  )}
                />
              }
            >
              {__("ID pridelené inou krajinou", "ehranica")}
            </RadioInputField>
          </div>
        </div>
      </Fieldset>

      <Fieldset legend={__("Dátum narodenia", "ehranica")}>
        <DateField name="birthDate" />
      </Fieldset>

      <Fieldset legend={__("Emailová adresa a telefónne číslo", "ehranica")}>
        <InputField
          type="email"
          name="email"
          label={__("Emailová adresa", "ehranica")}
          hint={__(
            "Zadajte email, na ktorý Vám odošleme potvrdenie o registrácii. Potvrdením sa preukážete na hraniciach pri príchode na Slovensko.",
            "ehranica"
          )}
        />
        <InputField
          name="phoneNumber"
          label={__(
            "Telefónne číslo (s ktorým ste pricestovali zo zahraničia)",
            "ehranica"
          )}
          hint={__(
            "Zadajte aj s medzinárodnou predvoľbou, napríklad +421 pre slovenské čísla.",
            "ehranica"
          )}
        />
        <InputField
          name="phoneNumberVerification"
          label={__("Zadajte telefónne číslo ešte raz", "ehranica")}
          hint={__(
            "Pozorne si skontrolujte, či ste vo Vašom telefónnom čísle omylom nezamenili niektorú číslicu.",
            "ehranica"
          )}
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
  originCountries: [""],
  arrivalDate: {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  },
  birthDate: {
    day: "",
    month: "",
    year: "",
  },
  idType: "slovak",
  idSlovak: "",
  idForeign: "",
  email: "",
  phoneNumber: "",
  phoneNumberVerification: "",
};

Yup.addMethod(Yup.object, "validDate", validDate);
Yup.addMethod(Yup.string, "allowedPhoneNumber", allowedPhoneNumber);
Yup.addMethod(Yup.string, "validSlovakId", slovakId);

Start.validationSchema = Yup.object({
  firstName: Yup.string().required(__("Zadajte meno.", "ehranica")),
  originCountries: Yup.array().of(
    Yup.string()
      .oneOf(Countries.map((c) => c.id))
      .required(__("Vyberte krajinu zo zoznamu.", "ehranica"))
  ),
  lastName: Yup.string().required(__("Zadajte priezvisko.", "ehranica")),
  arrivalDate: Yup.object().validDate(
    __("Zadajte správny deň a mesiac príchodu.", "ehranica")
  ),
  birthDate: Yup.object().validDate(
    __("Zadajte správny deň, mesiac a rok narodenia.", "ehranica")
  ),
  idType: Yup.string().oneOf(["slovak", "foreign"]).required(),
  idSlovak: Yup.string().when(["idType"], {
    is: "slovak",
    then: Yup.string().validSlovakId(
      __("Zadajte správne rodné číslo alebo BIČ.", "ehranica")
    ),
  }),
  idForeign: Yup.string().when(["idType"], {
    is: "foreign",
    then: Yup.string().required(
      __("Zadajte správne ID pridelené inou krajinou.", "ehranica")
    ),
  }),
  // originCountry: Yup.string().required(),
  email: Yup.string()
    .required(__("Zadajte emailovú adresu.", "ehranica"))
    .email(__("Zadajte správnu emailovú adresu.", "ehranica")),
  phoneNumber: Yup.string().allowedPhoneNumber(
    __(
      "Zadajte správne telefónne číslo. Musí začínať medzinárodnou predvoľbou + alebo 00.",
      "ehranica"
    )
  ),
  phoneNumberVerification: Yup.string()
    .allowedPhoneNumber(
      __(
        "Zadajte správne telefónne číslo. Musí začínať medzinárodnou predvoľbou + alebo 00.",
        "ehranica"
      )
    )
    .oneOf(
      [Yup.ref("phoneNumber"), null],
      __(
        "Zadané telefónne číslo nie je rovnaké ako v predchádzajúcom políčku.",
        "ehranica"
      )
    ),
});

export default Start;
