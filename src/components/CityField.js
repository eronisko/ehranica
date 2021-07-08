import React from "react";
import AutocompleteField from "./AutocompleteField";
import { __ } from "@wordpress/i18n";
import { municipalitiesAndCounties } from "autocomplete/municipalitiesAndCounties";
import replaceDiacritics from "autocomplete/replaceDiacritics";
import { useField } from "formik";
import { useTranslation } from "react-i18next";

function CityField(props) {
  // eslint-disable-next-line no-unused-vars
  const {t} = useTranslation('common');
  const [_, __, { setValue, setTouched }] = useField(props.countyFieldName);

  return (
    <AutocompleteField
      name={props.municipalityFieldName}
      label={props.label}
      source={suggest}
      tNoResults={() => t("component.cityField.notInList")}
      getFormValue={(city) => (city ? city.municipality : city)}
      templates={{
        inputValue: (city) => (city ? city.label : ""),
        suggestion: (city) => city.label,
      }}
      onFieldValueChange={(city) => {
        setTouched(true, false);

        if (city === "") {
          setValue(city, false);
          return;
        }

        setValue(city.county, false);
      }}
    />
  );
}

function suggest(query, populateResults) {
  const queryNormalized = replaceDiacritics(query.toLowerCase());

  const filteredResults = Cities.filter((result) =>
    result.searchToken.includes(queryNormalized)
  );
  populateResults(filteredResults);
}

const municipalityNameCounts = {};

municipalitiesAndCounties.forEach(([municipality]) => {
  if (municipalityNameCounts[municipality]) {
    municipalityNameCounts[municipality]++;
    return;
  }

  municipalityNameCounts[municipality] = 1;
});

export const Cities = municipalitiesAndCounties
  .map(([municipality, county]) => ({
    municipality,
    county,
    label:
      municipalityNameCounts[municipality] > 1
        ? `${municipality} (${__("okres", "ehranica")} ${county})`
        : municipality,
    searchToken: replaceDiacritics(municipality.toLowerCase()),
  }))
  .sort((a, b) => {
    const municipalityA = a.searchToken;
    const municipalityB = b.searchToken;

    if (municipalityA < municipalityB) {
      return -1;
    }

    if (municipalityA > municipalityB) {
      return 1;
    }

    return 0;
  });

export default CityField;
