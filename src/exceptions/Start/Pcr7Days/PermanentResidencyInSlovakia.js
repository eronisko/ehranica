import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function PermanentResidencyInSlovakia() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr7Days.legendPermanentSlovakia")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaPcr7Days"
              value="21"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.21")
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaPcr7Days"
              value="23"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.23")
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaPcr7Days"
              value="27"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.27")
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaPcr7Days"
              value="29"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.29")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default PermanentResidencyInSlovakia;
