import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import CityField, { Cities } from "components/CityField";
import ErrorMessage from "components/ErrorMessage";
import Fieldset from "components/Fieldset";
import { __ } from "@wordpress/i18n";
import CheckboxField from "components/CheckboxField";
import TextareaField from "components/TextareaField";
import FormGroup from "components/FormGroup";
import { useFormikContext } from "formik";
import { withWizard } from "react-albus";
import { validZip } from "../validations/Validations";
import { useTranslation } from "react-i18next";

function QuarantineRegistration({ wizard }) {
  const {t} = useTranslation('common');
  const { values } = useFormikContext();
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        {t("global.navigation.back")}
      </a>
      <p className="govuk-body">
        {t("quarantineRegistration.intro1")}
        <br />
        {t("quarantineRegistration.intro2")}
      </p>
      <Fieldset
        legend={t("quarantineRegistration.insuranceCompanyLegend")} 
        name="insuranceCompany"
      >
        <FormGroup name="insuranceCompany">
          <div className="govuk-radios">
            <RadioInputField name="insuranceCompany" value="25">
              {t("quarantineRegistration.insuranceCompany.25")}
            </RadioInputField>
            <RadioInputField name="insuranceCompany" value="24">
              {t("quarantineRegistration.insuranceCompany.24")}
            </RadioInputField>
            <RadioInputField name="insuranceCompany" value="27">
              {t("quarantineRegistration.insuranceCompany.27")}
            </RadioInputField>
            <RadioInputField name="insuranceCompany" value="98">
              {t("quarantineRegistration.insuranceCompany.98")}
            </RadioInputField>
            <RadioInputField name="insuranceCompany" value="99">
              {t("quarantineRegistration.insuranceCompany.99")}
            </RadioInputField>
          </div>
        </FormGroup>
      </Fieldset>
      <Fieldset legend={t("quarantineRegistration.addressLegend")}>
        <CityField
          municipalityFieldName="quarantineAddress.city"
          countyFieldName="quarantineAddress.county"
          label={t("quarantineRegistration.addressCity")}
        />
        <InputField
          name="quarantineAddress.street"
          label={t("quarantineRegistration.addressStreet")}
        />
        <InputField
          name="quarantineAddress.houseNumber"
          label={t("quarantineRegistration.addressNumber")}
        />
        <InputField
          name="quarantineAddress.zip"
          label={t("quarantineRegistration.addressZip")}
        />
      </Fieldset>
      <Fieldset legend={t("quarantineRegistration.addressPermanentLegend")}>
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <ErrorMessage name="permanentAddressSameAsQuarantineAddress" />
          <div className="govuk-radios">
            <RadioInputField
              name="permanentAddressSameAsQuarantineAddress"
              value="same"
            >
              {t("quarantineRegistration.addressPermanentSame")}
            </RadioInputField>
            <RadioInputField
              name="permanentAddressSameAsQuarantineAddress"
              value="different"
            >
              {t("quarantineRegistration.addressPermanentDifferent")}
            </RadioInputField>
            <RadioInputField
              name="permanentAddressSameAsQuarantineAddress"
              value="no_permanent_address"
            >
              {t("quarantineRegistration.addressPermanentNo")}
            </RadioInputField>
          </div>
        </div>
      </Fieldset>
      {values["permanentAddressSameAsQuarantineAddress"] === "different" && (
        <Fieldset legend={t("quarantineRegistration.addressPermanentLegend")}>
          <InputField
            name="permanentAddress.city"
            label={t("quarantineRegistration.addressCity")}
          />
          <InputField
            name="permanentAddress.street"
            label={t("quarantineRegistration.addressStreet")}
          />
          <InputField
            name="permanentAddress.houseNumber"
            label={t("quarantineRegistration.addressNumber")}
          />
          <InputField
            name="permanentAddress.zip"
            label={t("quarantineRegistration.addressZip")}
          />
        </Fieldset>
      )}
      <Fieldset legend={t("quarantineRegistration.additionalInfoLegend")}>
        <p className="govuk-hint">
          {t("quarantineRegistration.additionalInfoHelper")}
        </p>
        <InputField
          name="additionalInfo.numberOfPersonsInSameHousehold"
          type="number"
          label={t("quarantineRegistration.additionalInfoPersonsInHousehold")}
        />
        <InputField
          name="additionalInfo.doctorsFullName"
          label={t("quarantineRegistration.additionalInfoDoctorsName")}
        />
        <TextareaField
          name="additionalInfo.note"
          as="textarea"
          label={t("quarantineRegistration.additionalInfoNote")}
          hint={t("quarantineRegistration.additionalInfoNoteHint")}
        />
      </Fieldset>
      <Fieldset legend={t("global.confirmationLegend")}>
        <CheckboxField
          name="personalDataConsent"
          hint={
            <a href="/poucenie-o-ochrane-osobnych-udajov/" target="_blank">
              {t("global.dataConsent.linkText")}
            </a>
          }
        >
          {t("global.dataConsent.text")}
        </CheckboxField>
        <CheckboxField name="correctnessStatement">
          {t("global.correctnessStatement.text")}
        </CheckboxField>
      </Fieldset>
      <Button label={t("global.navigation.sendRegistration")} />
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
  city: Yup.string()
    .oneOf(Cities.map((c) => c.municipality))
    .required(__("Vyberte mesto/obec zo zoznamu.", "ehranica")),
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
