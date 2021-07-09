import React from "react";
import Fieldset from "../../components/Fieldset";
import RadioInputField from "../../components/RadioInputField";
import { useFormikContext } from "formik";
import PermanentResidencyInSlovakiaPcr7Days from "./Pcr7Days/PermanentResidencyInSlovakia";
import PermanentResidencyInNeighbour from "./Pcr7Days/PermanentResidencyInNeighbour";
import PermanentResidencyInUkraine from "./Pcr7Days/PermanentResidencyInUkraine";
import PermanentResidencyInSlovakiaPendler from "./Pcr7Days/Pendler/PermanentResidencyInSlovakia";
import PermanentResidencyInEu from "./Pcr7Days/Pendler/PermanentResidencyInEu";
import { useTranslation } from "react-i18next";

function Pcr7Days() {
  const {t} = useTranslation('common');
  const { values } = useFormikContext();

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr7Days.legend")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPcr7Days"
              value="Pendler"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.Pendler")
              }}
              conditionalRender={
                <div>
                  <RadioInputField
                    name="exceptionPendler"
                    value="PermanentResidencyInSlovakiaPendler"
                    dangerouslySetInnerHTML={{
                      __html: t("exceptions.list.PermanentResidencyInSlovakiaPendler")
                    }}
                  />
                  <RadioInputField
                    name="exceptionPendler"
                    value="PermanentResidencyInEuPendler"
                    dangerouslySetInnerHTML={{
                      __html: t("exceptions.list.PermanentResidencyInEuPendler")
                    }}
                  />
                  <RadioInputField
                    name="exceptionPendler"
                    value="20"
                    dangerouslySetInnerHTML={{
                      __html: t("exceptions.list.20")
                    }}
                  />
                </div>
              }
            />
            <RadioInputField
              name="exceptionPcr7Days"
              value="PermanentResidencyInSlovakiaPcr7Days"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.PermanentResidencyInSlovakiaPcr7Days")
              }}
            />
            <RadioInputField
              name="exceptionPcr7Days"
              value="PermanentResidencyInNeighbourPcr7Days"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.PermanentResidencyInNeighbourPcr7Days")
              }}
            />
            <RadioInputField
              name="exceptionPcr7Days"
              value="PermanentResidencyInUkraine"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.PermanentResidencyInUkraine")
              }}
            />
          </div>
        </div>
      </Fieldset>

      {values.exceptionPcr7Days === "PermanentResidencyInSlovakiaPcr7Days" && (
        <PermanentResidencyInSlovakiaPcr7Days />
      )}

      {values.exceptionPcr7Days === "PermanentResidencyInNeighbourPcr7Days" && (
        <PermanentResidencyInNeighbour />
      )}

      {values.exceptionPcr7Days === "PermanentResidencyInUkraine" && (
        <PermanentResidencyInUkraine />
      )}

      {values.exceptionPcr7Days === "Pendler" &&
        values.exceptionPendler === "PermanentResidencyInSlovakiaPendler" && (
          <PermanentResidencyInSlovakiaPendler />
        )}

      {values.exceptionPcr7Days === "Pendler" &&
        values.exceptionPendler === "PermanentResidencyInEuPendler" && (
          <PermanentResidencyInEu />
        )}
    </div>
  );
}

export default Pcr7Days;
