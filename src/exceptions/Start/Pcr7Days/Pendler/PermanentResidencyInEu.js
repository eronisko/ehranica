import React from "react";
import Fieldset from "../../../../components/Fieldset";
import RadioInputField from "../../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function PermanentResidencyInEu() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr7Days.legendPendlerPermanentEu")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInEuPendler"
              value="19"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.19")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default PermanentResidencyInEu;
