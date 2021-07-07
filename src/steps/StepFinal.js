import React, { useState, useEffect } from "react";
import { withWizard } from "react-albus";
import { __ } from "@wordpress/i18n";
import Panel from "../components/Panel";
import InsetText from "../components/InsetText";
import ErrorMessage from "../components/ErrorMessage";
import RadioInputField from "../components/RadioInputField";
import InputField from "../components/InputField";
import * as Yup from "yup";
import Button from "../components/Button";
import WarningText from "../components/WarningText";

const SITE_KEY = "6LeFQ7IZAAAAABuiRASOsOQv4HFxAhGhwQiljFM0";
// const SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

function StepFinal({ wizard }) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  var people = [];
  var personData = {
    vPhoneNumber: "+421919123456",
    vEmail: "test@testovic.sk",
    vQuarantineAddressCity: "Bratislava-Ružinov",
    vQuarantineAddressCityZipCode: "82104",
    vQuarantineAddressStreetName: "Hrachovofazuľová",
    vQuarantineAddressStreetNumber: "123",
    dEntry_from_abroad_planned_at: "2021-07-07",
    vHas_come_from_country: "DE",
    vOther_countries_visited: [],
    nHouseHoldPersonsCount: "",
    vGp_name: "",
    vPersonal_id: null,
    vSurname: "Mrkvička",
    vGivenNames: "Janko",
    dDateOfBirth: "2015-03-13",
    vPersonalNumber: "1553131228",
    nHealtInsuranceCompany: "24",
    vOtherSymptoms: "",
    vSex: "X",
    vQuarantineAddressCountry: "SK",
    exception_type: 9,
    foreign_address: "",
    employer_name: "",
    employer_address: "",
    vCountryColor: "G",
    nGreen_country_without_exception: null,
    vPermanentAddressCountry: "SK",
    vPermanentAddressCity: "Bratislava-Ružinov",
    vPermanentAddressCityZipCode: "82104",
    vPermanentAddressStreetName: "Hrachovofazuľová",
    vPermanentAddressStreetNumber: "123",
  };
  people.push(personData);

  let bodyText = __(
    "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia <strong>platí 6 mesiacov</strong>. Najbližší polrok sa teda pri prekračovaní hraníc nemusíte opätovne registrovať. Budete však vždy potrebovať <strong>potvrdenie o očkovaní alebo Digitálny COVID preukaz EÚ</strong>.",
    "ehranica"
  );

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
        console.log("Script loaded!");
      }
    );
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
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
        // console.log(people);
        console.log(data);
        setLoading(false);
        setResponse(data);
      })
      .catch((error) => {
        console.error("err: ", error);
      });
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Panel
        heading={__("Registrácia dokončená", "ehranica")}
        body={bodyText}
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

      <button onClick={handleClick} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {response && (
        <label>
          Output:
          <br />
          <pre>{JSON.stringify(response, undefined, 2)}</pre>
        </label>
      )}
    </div>
  );
  // }
}

let StepFinalWithWizard = withWizard(StepFinal);

StepFinalWithWizard.initialValues = {
  // under18HouseholdMemberIsolation: ''
};

StepFinalWithWizard.validationSchema = Yup.object({
  // under18HouseholdMemberIsolation: Yup.string().required()
});

export default StepFinalWithWizard;
