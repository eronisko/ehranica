import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function PermanentResidencyInSlovakia() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.ag7Days.legendPermanentSlovakia")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaAg7Days"
              value="24"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.24")
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaAg7Days"
              value="26"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.26")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default PermanentResidencyInSlovakia;
