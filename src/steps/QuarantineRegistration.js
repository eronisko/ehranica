import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import CityField, { Cities } from "components/CityField";
import DriveInField from "components/DriveInField";
import ErrorMessage from "components/ErrorMessage";
import Fieldset from "components/Fieldset";
import CheckboxField from "components/CheckboxField";
import TextareaField from "components/TextareaField";
import FormGroup from "components/FormGroup";
import { useFormikContext } from "formik";
import { withWizard } from "react-albus";
import { validZip } from "../validations/Validations";
import { useTranslation } from "react-i18next";

function QuarantineRegistration({ wizard }) {
  const { t, i18n } = useTranslation("common");
  const { values } = useFormikContext();

  const consentLink =
    i18n.language === "en"
      ? "/en/information-on-personal-data-protection/"
      : "/poucenie-o-ochrane-osobnych-udajov/";

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
          <CityField
            municipalityFieldName="permanentAddress.city"
            countyFieldName="permanentAddress.county"
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
      {/* <Fieldset legend={t("preferredDriveIn.legend")}>
        <DriveInField
          name="driveIn.id"
          label={t("preferredDriveIn.label")}
          hint={t("global.notRequiredField")}
        />
      </Fieldset> */}
      <Fieldset legend={t("quarantineRegistration.additionalInfoLegend")}>
        <p className="govuk-hint">
          {t("quarantineRegistration.additionalInfoHelper")}
        </p>
        <InputField
          name="additionalInfo.numberOfPersonsInSameHousehold"
          type="number"
          label={t("quarantineRegistration.additionalInfoPersonsInHousehold")}
          hint={t("global.notRequiredField")}
        />
        <InputField
          name="additionalInfo.doctorsFullName"
          label={t("quarantineRegistration.additionalInfoDoctorsName")}
          hint={t("global.notRequiredField")}
        />
        <TextareaField
          name="additionalInfo.note"
          as="textarea"
          label={t("quarantineRegistration.additionalInfoNote")}
          labelHint={t("global.notRequiredField")}
          hint={t("quarantineRegistration.additionalInfoNoteHint")}
        />
      </Fieldset>
      <Fieldset legend={t("global.confirmationLegend")}>
        <CheckboxField
          name="personalDataConsent"
          hint={
            <a href={consentLink} className="govuk-link" target="_blank">
              {t("global.dataConsent.linkText")}
            </a>
          }
        >
          {t("global.dataConsent.text")}
        </CheckboxField>
        <CheckboxField name="correctnessStatement">
          {t("global.correctnessStatement.text")}
        </CheckboxField>
        <CheckboxField name="sequencingStatement">
          {t("global.sequencingStatement.text")}
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
  sequencingStatement: false,
};

Yup.addMethod(Yup.string, "validZip", validZip);

const addressSchema = Yup.object({
  city: Yup.string()
    .oneOf(Cities.map((c) => c.municipality))
    .required("required.city"),
  street: Yup.string().required("required.street"),
  houseNumber: Yup.string().required("required.houseNumber"),
  zip: Yup.string().required("required.zip").validZip("required.zipCount"),
});

step.validationSchema = Yup.object({
  additionalInfo: Yup.object({
    numberOfPersonsInSameHousehold: Yup.number()
      .moreThan(-1, "required.household")
      .integer("required.household"),
  }),
  quarantineAddress: addressSchema.required(),

  permanentAddress: Yup.object().when(
    ["permanentAddressSameAsQuarantineAddress"],
    {
      is: "different",
      then: addressSchema.required(),
    }
  ),

  insuranceCompany: Yup.string().required("required.insuranceCompany"),
  personalDataConsent: Yup.bool().oneOf([true], "required.dataConsent"),
  correctnessStatement: Yup.bool().oneOf(
    [true],
    "required.correctnessStatement"
  ),
  sequencingStatement: Yup.bool().oneOf(
    [true],
    "required.sequencingStatement"
  ),
});

export default step;
