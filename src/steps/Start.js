import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import DateField from "components/Date";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import ErrorMessage from "components/ErrorMessage";
import Fieldset from "components/Fieldset";
import {
  validDate,
  allowedPhoneNumber,
  slovakId,
} from "validations/Validations";
import { __ } from "@wordpress/i18n";
import Accordion from "components/Accordion";
import CheckboxField from "components/CheckboxField";

function Start({ next }) {
  return (
    <div>
      <Fieldset
        legend={__("Zadajte krajinu a dátum príchodu na Slovensko", "ehranica")}
      >
        <DateField name="arrivalDate" />
        {/*<CountryField name="originCountry" label="Z ktorej krajiny prichádzate?" />*/}
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

      <Accordion.Group>
        <Accordion.Section title="Accordion title">
          <p className="govuk-body">
            This is the content for Writing well for specialists.
          </p>
        </Accordion.Section>
        <Accordion.Section title="Accordion title 2">
          <p class="govuk-body">This is the other content.</p>
        </Accordion.Section>
      </Accordion.Group>

      <Fieldset legend={__("Potvrdenia", "ehranica")}>
        <CheckboxField
          name="personalDataConsent"
          hint={
            <a href="/poucenie-o-ochrane-osobnych-udajov/" target="_blank">
              Poučenie o ochrane osobných údajov
            </a>
          }
        >
          Oboznámil(a) som sa s Poučením o ochrane osobných údajov
        </CheckboxField>
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
    day: "",
    month: "",
    year: "",
  },
  idType: "slovak",
  idSlovak: "",
  idForeign: "",
  // originCountry: "",
  email: "",
  phoneNumber: "",
  phoneNumberVerification: "",
  personalDataConsent: false,
};

Yup.addMethod(Yup.object, "validDate", validDate);
Yup.addMethod(Yup.string, "allowedPhoneNumber", allowedPhoneNumber);
Yup.addMethod(Yup.string, "validSlovakId", slovakId);

Start.validationSchema = Yup.object({
  firstName: Yup.string().required(__("Zadajte meno.", "ehranica")),
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
  personalDataConsent: Yup.bool().oneOf(
    [true],
    __("Prosím, akceptujte súhlas so spracovaním osobných údajov.", "ehranica")
  ),
});

export default Start;
