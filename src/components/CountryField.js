import React from "react";
import AutocompleteField from "./AutocompleteField";
import { __ } from "@wordpress/i18n";
import { countries as countriesData } from "autocomplete/countries";
import replaceDiacritics from "autocomplete/replaceDiacritics";

function CountryField(props) {
  function onConfirm(value) {
    console.log("CountryField.onConfirm", value);
  }

  return (
    <AutocompleteField
      name={props.name}
      onConfirm={onConfirm}
      label={props.label}
      options={countries}
      tNoResults={() => __("Krajina nie je v zozname", "ehranica")}
      templates={{
        inputValue: (country) => (country ? country.label.sk : ""),
        suggestion: (country) => country.label.sk, //TODO
      }}
      source={suggest}
    />
  );
}

function suggest(query, populateResults) {
  const queryNormalized = replaceDiacritics(query.toLowerCase());

  const filteredResults = countries.filter((result) =>
    result.searchToken.includes(queryNormalized)
  );
  populateResults(filteredResults);
}

const countries = countriesData
  .map((country) => ({
    id: country[0],
    aliases: [country[1], country[2], country[3], country[4]],
    label: {
      sk: country[2],
      en: country[4],
    },
    searchToken: replaceDiacritics(
      [country[1], country[2], country[3], country[4]].join(" ")
    )
      .toLowerCase()
      .replace(/[ -.]+/g, " "),
  }))

  // Sort by (localized) label
  .sort((a, b) => {
    const labelA = a.label.sk; //TODO
    const labelB = b.label.sk; //TODO
    if (labelA < labelB) {
      return -1;
    }

    if (labelA > labelB) {
      return 1;
    }

    return 0;
  });

export default CountryField;
