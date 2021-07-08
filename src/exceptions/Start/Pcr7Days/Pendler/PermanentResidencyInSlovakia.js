import React from "react";
import Fieldset from "../../../../components/Fieldset";
import RadioInputField from "../../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function PermanentResidencyInSlovakia() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr7Days.legendPendlerPermanentSlovakia")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaPendler"
              value="18"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.18")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default PermanentResidencyInSlovakia;
