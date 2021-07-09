import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function PermanentResidencyInNeighbour() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr7Days.legendPermanentNeighbour")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInNeighbourPcr7Days"
              value="22"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.22")
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInNeighbourPcr7Days"
              value="28"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.28")
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInNeighbourPcr7Days"
              value="30"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.30")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default PermanentResidencyInNeighbour;
