import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function PermanentResidencyInUkraine() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr7Days.legendPermanentUkraine")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInUkraine"
              value="22"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.22")
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInUkraine"
              value="28"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.28")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default PermanentResidencyInUkraine;
