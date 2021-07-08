import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import ErrorMessage from "components/ErrorMessage";
import Fieldset from "components/Fieldset";
import { __ } from "@wordpress/i18n";
import CheckboxField from "components/CheckboxField";
import TextareaField from "components/TextareaField";
import FormGroup from "components/FormGroup";
import { useFormikContext } from "formik";
import { withWizard } from "react-albus";
import { validZip } from "../validations/Validations";

function QuarantineRegistration({ wizard }) {
  const { values } = useFormikContext();
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        {__("Späť")}
      </a>
      <p className="govuk-body">
        {__(
          "Dokončite registráciu do ehranice. Po vstupe na Slovensko je nutné ostať v domácej izolácii.",
          "ehranica"
        )}
        <br />
        {__(
          "Domáca izolácia skončí po negatívnom PCR teste, na ktorý budete objednaný. ",
          "ehranica"
        )}
      </p>
      <Fieldset
        legend={__("Zdravotná poisťovňa", "ehranica")}
        name="insuranceCompany"
      >
        <FormGroup name="insuranceCompany">
          <div className="govuk-radios">
            <RadioInputField name="insuranceCompany" value="25">
              {__("Všeobecná zdravotná poisťovňa", "ehranica")}
            </RadioInputField>
            <RadioInputField name="insuranceCompany" value="24">
              {__("Dôvera zdravotná poisťovňa", "ehranica")}
            </RadioInputField>
            <RadioInputField name="insuranceCompany" value="27">
              {__("Union zdravotná poisťovňa", "ehranica")}
            </RadioInputField>
            <RadioInputField name="insuranceCompany" value="98">
              {__("Poistenie v inej krajine EÚ", "ehranica")}
            </RadioInputField>
            <RadioInputField name="insuranceCompany" value="99">
              {__("Bez poistenia v EÚ", "ehranica")}
            </RadioInputField>
          </div>
        </FormGroup>
      </Fieldset>
      <Fieldset legend={__("Adresa absolvovania domácej izolácie", "ehranica")}>
        <InputField
          name="quarantineAddress.city"
          label={__("Mesto/Obec", "ehranica")}
        />
        <InputField
          name="quarantineAddress.street"
          label={__("Ulica", "ehranica")}
        />
        <InputField
          name="quarantineAddress.houseNumber"
          label={__("Orientačné číslo (číslo domu)", "ehranica")}
        />
        <InputField
          name="quarantineAddress.zip"
          label={__("PSČ", "ehranica")}
        />
      </Fieldset>
      <Fieldset legend={__("Adresa trvalého bydliska", "ehranica")}>
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <ErrorMessage name="permanentAddressSameAsQuarantineAddress" />
          <div className="govuk-radios">
            <RadioInputField
              name="permanentAddressSameAsQuarantineAddress"
              value="same"
            >
              {__("Rovnaká ako adresa domácej izolácie", "ehranica")}
            </RadioInputField>
            <RadioInputField
              name="permanentAddressSameAsQuarantineAddress"
              value="different"
            >
              {__("Iná ako adresa domácej izolácie", "ehranica")}
            </RadioInputField>
            <RadioInputField
              name="permanentAddressSameAsQuarantineAddress"
              value="no_permanent_address"
            >
              {__("Bez trvalého bydliska na Slovensku", "ehranica")}
            </RadioInputField>
          </div>
        </div>
      </Fieldset>
      {values["permanentAddressSameAsQuarantineAddress"] === "different" && (
        <Fieldset legend={__("Adresa trvalého bydliska", "ehranica")}>
          <InputField
            name="permanentAddress.city"
            label={__("Mesto/Obec", "ehranica")}
          />
          <InputField
            name="permanentAddress.street"
            label={__("Ulica", "ehranica")}
          />
          <InputField
            name="permanentAddress.houseNumber"
            label={__("Orientačné číslo (číslo domu)", "ehranica")}
          />
          <InputField
            name="permanentAddress.zip"
            label={__("PSČ", "ehranica")}
          />
        </Fieldset>
      )}
      <Fieldset legend={__("Dodatočné údaje", "ehranica")}>
        <p className="govuk-hint">
          {__(
            "V prípade pozitívneho testu, v záujme ochrany Vás a Vašich blízkych, budú od Vás hygienici vyžadovať dodatočné informácie. Pomôžete nám, ak ich dobrovoľne zadáte už teraz.",
            "ehranica"
          )}
        </p>
        <InputField
          name="additionalInfo.numberOfPersonsInSameHousehold"
          type="number"
          label={__(
            "Počet osôb žijúcich alebo zdržiavajúcich sa v mieste izolácie",
            "ehranica"
          )}
        />
        <InputField
          name="additionalInfo.doctorsFullName"
          label={__("Meno a priezvisko všeobecného lekára", "ehranica")}
        />
        <TextareaField
          name="additionalInfo.note"
          as="textarea"
          label={__("Poznámka", "ehranica")}
          hint={__(
            "Do poznámky môžete uviesť upresňujúce informácie.",
            "ehranica"
          )}
        />
      </Fieldset>
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

let step = withWizard(QuarantineRegistration);

step.initialValues = {
  additionalInfo: {
    numberOfPersonsInSameHousehold: "",
    note: "",
    doctorsFullName: "",
  },
  insuranceCompany: "",
  quarantineAddress: {
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  },
  permanentAddressSameAsQuarantineAddress: "same",
  permanentAddress: {
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  },
  personalDataConsent: false,
  correctnessStatement: false,
};

Yup.addMethod(Yup.string, "validZip", validZip);

const addressSchema = Yup.object({
  city: Yup.string().required(__("Vyberte mesto/obec zo zoznamu.", "ehranica")),
  street: Yup.string().required(__("Zadajte ulicu.", "ehranica")),
  houseNumber: Yup.string().required(__("Zadajte číslo domu.", "ehranica")),
  zip: Yup.string()
    .required(__("Zadajte PSČ.", "ehranica"))
    .validZip("PSČ musí obsahovať presne 5 cifier."),
});

step.validationSchema = Yup.object({
  additionalInfo: Yup.object({
    numberOfPersonsInSameHousehold: Yup.number()
      .moreThan(-1, __("Zadajte celé kladné číslo."))
      .integer(__("Zadajte celé kladné číslo.")),
  }),
  quarantineAddress: addressSchema.required(),

  permanentAddress: Yup.object().when(
    ["permanentAddressSameAsQuarantineAddress"],
    {
      is: "different",
      then: addressSchema.required(),
    }
  ),

  insuranceCompany: Yup.string().required(
    __("Zvoľte spôsob poistenia.", "ehranica")
  ),
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
