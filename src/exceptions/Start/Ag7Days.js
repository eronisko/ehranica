import React from "react";
import Fieldset from "../../components/Fieldset";
import RadioInputField from "../../components/RadioInputField";
import { useFormikContext } from "formik";
import PermanentResidencyInSlovakia from "./Ag7Days/PermanentResidencyInSlovakia";
import PermanentResidencyInNeighbour from "./Ag7Days/PermanentResidencyInNeighbour";
import { useTranslation } from "react-i18next";

function Ag7Days() {
  const {t} = useTranslation('common');
  const { values } = useFormikContext();

  return (
    <div>
      <Fieldset
        legend={t("exceptions.ag7Days.legend")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionAg7Days"
              value="PermanentResidencyInSlovakiaAg7Days"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.PermanentResidencyInSlovakiaAg7Days")
              }}
            />
            <RadioInputField
              name="exceptionAg7Days"
              value="PermanentResidencyInNeighbourAg7Days"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.PermanentResidencyInNeighbourAg7Days")
              }}
            />
          </div>
        </div>
      </Fieldset>

      {values.exceptionAg7Days === "PermanentResidencyInSlovakiaAg7Days" && (
        <PermanentResidencyInSlovakia />
      )}

      {values.exceptionAg7Days === "PermanentResidencyInNeighbourAg7Days" && (
        <PermanentResidencyInNeighbour />
      )}
    </div>
  );
}

export default Ag7Days;
