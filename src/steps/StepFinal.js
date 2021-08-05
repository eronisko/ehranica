import React, { useState, useEffect } from "react";
import { withWizard } from "react-albus";
import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import { formatDate } from "helpers/Helpers";
import Result from "../components/Result";
import i18next from "i18next";

const SITE_KEY = "6LeFQ7IZAAAAABuiRASOsOQv4HFxAhGhwQiljFM0";

function StepFinal({ isTest, wizard }) {
  const { t, i18n } = useTranslation("common");
  const { values } = useFormikContext();
  const [state, setState] = useState({
    loading: true,
    isError: null,
    message: null,
  });

  let people = [];

  let permanentAddress = values.permanentAddress;
  let quarantineAddress = values.quarantineAddress;

  if (values.permanentAddressSameAsQuarantineAddress === "same") {
    permanentAddress = quarantineAddress;
  }

  const originCountries = [...values.originCountries];
  const phoneNumber = values.phoneNumber;

  let personData = {
    vPhoneNumber: phoneNumber.replace(/[ \-\(\)]/g, ""),
    vEmail: values.email,
    vSurname: values.lastName,
    vGivenNames: values.firstName,
    vPersonal_id: values.idType === "foreign" ? values.idForeign : null,
    vPersonalNumber: values.idType === "slovak" ? values.idSlovak : null,
    nHealtInsuranceCompany: values.insuranceCompany,
    exception_type: values.exceptionId > 0 ? values.exceptionId : null,
    vHas_come_from_country: originCountries.shift(),
    vOther_countries_visited: originCountries,
    notification_language: (i18n.language || "sk").toUpperCase(),

    vPermanentAddressCountry: "SK",
    vPermanentAddressCity: permanentAddress.city,
    vPermanentAddressCityZipCode: permanentAddress.zip,
    vPermanentAddressStreetName: permanentAddress.street,
    vPermanentAddressStreetNumber: permanentAddress.houseNumber,

    vQuarantineAddressCountry: "SK",
    vQuarantineAddressCity: quarantineAddress.city,
    vQuarantineAddressCityZipCode: quarantineAddress.zip,
    vQuarantineAddressStreetName: quarantineAddress.street,
    vQuarantineAddressStreetNumber: quarantineAddress.houseNumber,

    dEntry_from_abroad_planned_at: formatDate(values.arrivalDate),
    dDateOfBirth: formatDate(values.birthDate),

    nHouseHoldPersonsCount:
      values.additionalInfo.numberOfPersonsInSameHousehold,
    vGp_name: values.additionalInfo.doctorsFullName,
    vOtherSymptoms: values.additionalInfo.note,

    vSex: "X",

    // preferred_drivein_id: values.driveIn && values.driveIn.id ? values.driveIn.id : 0,
  };

  people.push(personData);

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) {
            callback();
          }
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) {
        callback();
      }
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        submitForm();
      }
    );
  }, []);

  const submitForm = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token) => {
          submitData(token);
        });
    });
  };

  const submitData = (token) => {
    // call a backend API to verify reCAPTCHA response
    fetch("https://ekarantena.korona.gov.sk/ehranica/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isTest: isTest,
        token: token,
        people: people,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        let message = null;
        let isError = null;

        if (data.payload && data.payload.vCovid19Pass) {
          isError = false;
          if (data.payload && data.payload.vEET_user_text) {
            message = data.payload.vEET_user_text;
          } else {
            message = t("stepFinal.thanksMessage");
          }
        } else {
          isError = true;
          message = t("stepFinal.thanksMessageError");

          if (data.errors && data.errors.length) {
            data.errors.forEach(error => {
              message += "<br/><br/>";
              if (i18next.language == "en") {
                message += error.description_en;
              } else {
                message += error.description;
              }
            });
          }
        }

        setState({
          loading: false,
          isError: isError,
          message: message,
        });
      })
      .catch((error) => {
        console.error("err: ", error);
      });
  };

  return (
    <div>
      {state.loading && (
        <div>
          <p className="govuk-body">{t("stepFinal.loading")}</p>
        </div>
      )}
      {!state.loading && (
        <Result
          isError={state.isError}
          title={
            state.isError
              ? t("stepFinal.registrationError")
              : t("stepFinal.registrationSuccess")
          }
          body={state.message}
        />
      )}
    </div>
  );
}

let StepFinalWithWizard = withWizard(StepFinal);

export default StepFinalWithWizard;
