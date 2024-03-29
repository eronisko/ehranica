import React, { useMemo } from "react";
import AutocompleteField from "./AutocompleteField";
import { countries as countriesData } from "autocomplete/countries";
import replaceDiacritics from "autocomplete/replaceDiacritics";
import { useField } from "formik";
import { useTranslation } from "react-i18next";

function CountryField(props) {
  const { t } = useTranslation("common");
  const locale = props.locale || "sk";
  const [field] = useField(props.name);
  const countries = useMemo(() => getCountriesSorted(locale), [locale]);
  const defaultValue = useMemo(() => {
    if (field.value) {
      const country = Countries.find((c) => c.id === field.value);
      if (country) return country.label[locale];
    }
  }, [field.value]);

  function suggest(query, populateResults) {
    const queryNormalized = replaceDiacritics(query.toLowerCase());

    const filteredResults = countries.filter((result) =>
      result.searchToken.includes(queryNormalized)
    );
    populateResults(filteredResults);
  }

  return (
    <AutocompleteField
      name={props.name}
      label={props.label}
      source={suggest}
      tNoResults={() => t("component.countryField.notInList")}
      tAssistiveHint={() => t("component.countryField.assistiveHint")}
      getFormValue={(country) => (country ? country.id : country)}
      templates={{
        inputValue: (country) => (country ? country.label[locale] : ""),
        suggestion: (country) => {
          if (typeof country === "string") return country;
          return country.label[locale];
        },
      }}
      controls={props.controls}
      defaultValue={defaultValue}
      hint={props.hint}
    />
  );
}

function getCountriesSorted(locale) {
  return Countries.slice().sort((a, b) => {
    const labelA = a.sortKeys[locale];
    const labelB = b.sortKeys[locale];

    if (labelA < labelB) {
      return -1;
    }

    if (labelA > labelB) {
      return 1;
    }

    return 0;
  });
}

export const Countries = countriesData.map((country) => ({
  id: country[0],
  aliases: [country[1], country[2], country[3], country[4]],
  label: {
    sk: country[2],
    en: country[4],
  },
  sortKeys: {
    sk: replaceDiacritics(country[2]),
    en: replaceDiacritics(country[4]),
  },
  searchToken: replaceDiacritics(
    [country[1], country[2], country[3], country[4]].join(" ")
  )
    .toLowerCase()
    .replace(/[ -.]+/g, " "),
}));

export default CountryField;
