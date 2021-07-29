import React, { useEffect, useState } from "react";
import AutocompleteField from "./AutocompleteField";
import replaceDiacritics from "autocomplete/replaceDiacritics";
import { useField } from "formik";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const noDrivein = [{ id: 0 }];
let driveins = [];

function DriveInField(props) {
  // eslint-disable-next-line no-unused-vars
  const {t} = useTranslation('common');
  const [_, ___, { setValue, setTouched }] = useField(props.name);

  const [state, setState] = useState({
    loading: true
  });

  const getData = async() =>
    await fetch("https://mojeezdravie.nczisk.sk/api/v1/svk-covid-driveins", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          setState({
            loading: false
          });
          driveins = [...noDrivein, ...result.map];
        },
        (error) => {
          console.error("err: ", error);
        }
      )

  useEffect(() => {
    getData()
  }, []);
  
  return (
    <div>
      {state.loading && (
        <div>
          <p className="govuk-body">{t("stepFinal.loading")}</p>
        </div>
      )}
      {!state.loading && (
        <AutocompleteField
          name={props.name}
          label={props.label}
          source={suggest}
          tNoResults={() => t("component.driveInField.notInList")}
          tAssistiveHint={() => t("component.driveInField.assistiveHint")}
          getFormValue={(drivein) => (drivein ? drivein.id : drivein)}
          templates={{
            inputValue: (drivein) => (drivein ? drivein.label : ""),
            suggestion: (drivein) => drivein.label,
          }}
          onFieldValueChange={(drivein) => {
            setTouched(true, false);
    
            if (drivein === "") {
              setValue(drivein, false);
              return;
            }
    
            setValue(drivein.id, false);
          }}
          hint={props.hint}
        />
      )} 
    </div>
  );
}

function suggest(query, populateResults) {
  const queryNormalized = replaceDiacritics(query.toLowerCase());

  const DriveIns = driveins
  .map((drivein) => ({
    id: drivein.id,
    label: 
      drivein.id !== 0
        ? `${drivein.city}, ${drivein.title}, ${drivein.street_name} ${drivein.street_number}, ${drivein.zip_code}, ${drivein.operated_by}`
        : i18next.t("common:component.driveInField.notPreferredDrivein"),
    searchToken: 
      drivein.id !== 0
        ? replaceDiacritics(`${drivein.city}, ${drivein.title}, ${drivein.street_name} ${drivein.street_number}, ${drivein.zip_code}, ${drivein.operated_by}`.toLowerCase())
        : replaceDiacritics(` ${i18next.t("common:component.driveInField.notPreferredDrivein")}`.toLowerCase()),
  }))
  .sort((a, b) => {
    const valA = a.searchToken;
    const valB = b.searchToken;

    if (valA < valB) {
      return -1;
    }

    if (valA > valB) {
      return 1;
    }

    return 0;
  });

  const filteredResults = DriveIns.filter((result) =>
    result.searchToken.includes(queryNormalized)
  );
  populateResults(filteredResults);
}

export default DriveInField;
