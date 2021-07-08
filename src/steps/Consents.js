import React, { useState, useEffect } from "react";
import Button from "components/Button";
import * as Yup from "yup";
import Fieldset from "components/Fieldset";
import { __ } from "@wordpress/i18n";
import CheckboxField from "components/CheckboxField";
import { withWizard } from "react-albus";
import { useFormikContext } from "formik";

const SITE_KEY = "6LeFQ7IZAAAAABuiRASOsOQv4HFxAhGhwQiljFM0";

function Consents({ wizard }) {
  const { values } = useFormikContext();
  const [loading, setLoading] = useState(false);
  
  var people = [];
  // var personData = {
  //   vPhoneNumber: values.phoneNumber,
  //   vEmail: values.email,
  //   vSurname: values.lastName,
  //   vGivenNames: values.firstName,
  //   // fieldy pre adresu izolacie (daj zatial natvrdo nejake hodnoty)
  //   vQuarantineAddressCity: values.quarantineAddress.city,
  //   vQuarantineAddressCityZipCode: values.quarantineAddress.zip,
  //   vQuarantineAddressStreetName: values.quarantineAddress.street,
  //   vQuarantineAddressStreetNumber: values.quarantineAddress.houseNumber,
  //   // datum prichodu vo formate Y-m-d, resp. napr. 2021-01-23
  //   dEntry_from_abroad_planned_at: values.arrivalDate.year+'-'+values.arrivalDate.month+'-'+values.arrivalDate.day,
  //   // krajina prichodu, daj zatial natvrdo CZ
  //   vHas_come_from_country: 'CZ',
  //   // ine navstivene krajiny, daj natvrdo []
  //   vOther_countries_visited: [],
  //   // pocet clenov v spolocnej domacnosti, moze byt prazdne
  //   nHouseHoldPersonsCount: values.hasHouseholdMemberInIsolation,
  //   // meno doktora, moze byt prazdne
  //   vGp_name: '',
  //   // zahranicne id cloveka alebo null ak ide o Slovaka
  //   vPersonal_id: values.idType === 'foreign' ? values.idForeign : null,
  //   // datum narodenia vo formate Y-m-d, resp. napr. 2021-01-23
  //   dDateOfBirth: values.birthDate.year+'-'+values.birthDate.month+'-'+values.birthDate.day,
  //   // rodne cislo (bez lomky)
  //   vPersonalNumber: values.idType === 'slovak' ? values.idSlovak : null,
  //   // kod zdravotnej poistovne, pouzi napr.: 2
  //   nHealtInsuranceCompany: values.insuranceCompany,
  //   // poznamka, moze byt prazdne
  //   vOtherSymptoms: '',
  //   // id vynimky
  //   exception_type: values.exceptionId,
  //   // toto daj natvrdo takto (mozno to neskor zrusime, ale neviem, ci to uz upravili v NCZI)
  //   foreign_address: '',
  //   employer_name: '',
  //   employer_address: '',
  //   vSex: "X",
  //   vQuarantineAddressCountry: 'SK',
  //   vCountryColor: 'G',
  //   nGreen_country_without_exception: null
  // }
  // // adresa trvaleho bydliska (ak je rovnaka ako adresa izolacie, tak sa pouziju rovnake hodnoty) - nepovinny udaj
  // if (values.permanentAddressSameAsQuarantineAddress === 'same') {
  //   personData['vPermanentAddressCountry'] = 'SK';
  //   personData['vPermanentAddressCity'] = values.quarantineAddress.city;
  //   personData['vPermanentAddressCityZipCode'] = values.quarantineAddress.zip;
  //   personData['vPermanentAddressStreetName'] = values.quarantineAddress.street;
  //   personData['vPermanentAddressStreetNumber'] = values.quarantineAddress.houseNumber;
  // } else {
  //   // if (data['permanent-address'] === 'other-than-isolation') {
  //     personData['vPermanentAddressCountry'] = 'SK';
  //     personData['vPermanentAddressCity'] = values.permanentAddress.city;
  //     personData['vPermanentAddressCityZipCode'] = values.permanentAddress.zip;
  //     personData['vPermanentAddressStreetName'] = values.permanentAddress.street;
  //     personData['vPermanentAddressStreetNumber'] = values.permanentAddress.houseNumber;
  //   // }
  // }
  
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
        console.log('people: ' , people);
        console.log('values: ',values);
        console.log(data);
        setLoading(false);
        // push("StepFinal");
        // setResponse(data);
      })
      .catch((error) => {
        console.error("err: ", error);
      });
  };

  return (
    <>
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        {__("Späť")}
      </a>

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

      <Button label={__("Odoslať registráciu")}  /> {/* disabled={loading} onClick={handleClick} */}
    </>
  );
}

let step = withWizard(Consents);

step.initialValues = {
  personalDataConsent: false,
  correctnessStatement: false,
};

step.validationSchema = Yup.object({
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
