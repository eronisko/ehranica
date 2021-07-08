import React, { useState, useEffect } from "react";
import { withWizard } from "react-albus";
import { __ } from "@wordpress/i18n";
import Panel from "../components/Panel";
import InsetText from "../components/InsetText";
import ErrorMessage from "../components/ErrorMessage";
import RadioInputField from "../components/RadioInputField";
import InputField from "../components/InputField";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import WarningText from "../components/WarningText";
import { formatDate } from "helpers/Helpers";

const SITE_KEY = "6LeFQ7IZAAAAABuiRASOsOQv4HFxAhGhwQiljFM0";

function StepFinal({ wizard }) {
  const { values } = useFormikContext();
  const [state, setState] = useState({
    loading: true,
    thankYouMessage: null,
  });

  let people = [];

  let permanentAddress = values.permanentAddress;
  let quarantineAddress = values.quarantineAddress;

  if (values.permanentAddressSameAsQuarantineAddress === "same") {
    permanentAddress = quarantineAddress;
  }

  // TODO: Remove these hardcoded values
  quarantineAddress = {
    city: "x",
    zip: "03601",
    street: "x",
    houseNumber: "x",
  };
  values.exceptionId = values.exceptionId > 0 ? 1 : null;
  values.originCountry = "DE";

  let personData = {
    vPhoneNumber: values.phoneNumber,
    vEmail: values.email,
    vSurname: values.lastName,
    vGivenNames: values.firstName,
    vPersonal_id: values.idType === "foreign" ? values.idForeign : null,
    vPersonalNumber: values.idType === "slovak" ? values.idSlovak : null,
    nHealtInsuranceCompany: values.insuranceCompany,
    exception_type: values.exceptionId > 0 ? values.exceptionId : null,
    vHas_come_from_country: values.originCountry,

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

    vOther_countries_visited: [],
    nHouseHoldPersonsCount: "",
    vGp_name: "",
    vOtherSymptoms: "",
    vSex: "X",
    employer_name: "x",
    employer_address: "x",
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
        isTest: true,
        token: token,
        people: people,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        let thankYouMessage = null;

        if (data.payload && data.payload.vEET_user_text) {
          thankYouMessage = data.payload.vEET_user_text;
        } else {
          thankYouMessage = __(
            "Ďakujeme, že ste sa zaregistrovali do eHranice.",
            "ehranica"
          );
        }

        setState({
          loading: false,
          thankYouMessage: thankYouMessage,
        });
      })
      .catch((error) => {
        console.error("err: ", error);
      });
  };

  return (
    <div>
      {state.loading && <div>Registrácia sa odosiela. Prosím, čakajte...</div>}
      {!state.loading && (
        <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Panel
            heading={__("Registrácia dokončená", "ehranica")}
            body={state.thankYouMessage}
          />
          <InsetText
            content={__(
              'Ak cestujete na Slovensko letecky, musíte taktiež vyplniť formulár na stránke <a href="https://www.mindop.sk/covid-19" target="_blank" class="govuk-link">mindop.sk/covid-19</a>.',
              "ehranica"
            )}
          />
          <WarningText
            content={__(
              'V prípade že prichádzate z <a href="">týchto</a> krajín letecky, musíte mať negatívny 72-hodín starý PCR test.',
              "ehranica"
            )}
          />
          <p className="govuk-body">
            {__(
              "Ďaľšie inštrukcie Vám prídu v najbližších dňoch v SMS správe alebo emailom.",
              "ehranica"
            )}
          </p>
          <p className="govuk-body">
            <a
              className="govuk-link"
              href="#"
              title={__("Ohodnoťte službu e-Hranica.", "ehranica")}
            >
              {__("Ohodnoťte službu e-Hranica.", "ehranica")}
            </a>
          </p>
          <h2 className="govuk-heading-m">{__("Ďaľšie akcie", "ehranica")}</h2>
          <div className="govuk-button-group">
            <a
              href="."
              className="govuk-button govuk-button--secondary"
              data-module="govuk-button"
            >
              {__("Zaregistrovať ďalšiu osobu", "ehranica")}
            </a>
            <a
              href="https://korona.gov.sk"
              className="govuk-button govuk-button--secondary govuk-!-margin-left-5"
              data-module="govuk-button"
            >
              {__("Späť na korona.gov.sk", "ehranica")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

let StepFinalWithWizard = withWizard(StepFinal);

export default StepFinalWithWizard;
