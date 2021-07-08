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
import { useTranslation } from "react-i18next";
import { __ } from "@wordpress/i18n";

function Start() {
  const { t } = useTranslation("common");
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
      <Fieldset legend={t("startStep.legend")}>
        <DateField name="arrivalDate" />
        <FieldArray name="originCountries">
          {({ remove, push }) => (
            <>
              {values.originCountries.map((country, index) => (
                <CountryField
                  key={`originCountries.${index}-${values.originCountries[index]}`}
                  name={`originCountries.${index}`}
                  label={getCountryFieldLabel(index)}
                  hint={getCountryFieldHint(index)}
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
                        {t("startStep.cancel")}
                      </Link>
                    )
                  }
                />
              ))}
              <Link onClick={() => push("")}>
                {t("startStep.addAnotherCountry")}
              </Link>
            </>
          )}
        </FieldArray>
        <div className="govuk-!-margin-bottom-3" />
      </Fieldset>

      <Fieldset legend={t("startStep.personalInfo.legend")}>
        <InputField
          name="firstName"
          label={t("startStep.personalInfo.firstName")}
        />
        <InputField
          name="lastName"
          label={t("startStep.personalInfo.lastName")}
        />
      </Fieldset>

      <Fieldset legend={t("startStep.idNumber.legend")}>
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <ErrorMessage name="idType" />
          <div className="govuk-radios">
            <RadioInputField
              name="idType"
              value="slovak"
              conditionalRender={<InputField name="idSlovak" />}
            >
              {t("startStep.idNumber.icoBic")}
            </RadioInputField>
            <RadioInputField
              name="idType"
              value="foreign"
              conditionalRender={
                <InputField
                  name="idForeign"
                  hint={t("startStep.idNumber.icoBicHelper")}
                />
              }
            >
              {t("startStep.idNumber.byCountry")}
            </RadioInputField>
          </div>
        </div>
      </Fieldset>

      <Fieldset legend={t("startStep.birthDateLegend")}>
        <DateField name="birthDate" />
      </Fieldset>

      <Fieldset legend={t("startStep.emailMobile.legend")}>
        <InputField
          type="email"
          name="email"
          label={t("startStep.emailMobile.email")}
          hint={t("startStep.emailMobile.emailHint")}
        />
        <InputField
          name="phoneNumber"
          label={t("startStep.emailMobile.phone")}
          hint={t("startStep.emailMobile.phoneHint")}
        />
        <InputField
          name="phoneNumberVerification"
          label={t("startStep.emailMobile.phoneVerify")}
          hint={t("startStep.emailMobile.phoneVerifyHint")}
        />
      </Fieldset>

      <Button />
    </div>
  );
}

function getCountryFieldLabel(index) {
  if (index === 0) return __("Z ktorej krajiny ste prišli?", "ehranica");
  if (index === 1)
    return __(
      "Ktoré ďalšie krajiny ste navštívili za posledných 14 dní?",
      "ehranica"
    );
}

function getCountryFieldHint(index) {
  if (index === 0)
    return __(
      "Krajina príchodu už nie je rozhodujúca, no pre ochranu zdravia ju musíme sledovať.",
      "ehranica"
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
      .required("form.errors.wrongCountry")
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
