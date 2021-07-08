import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../components/Fieldset";
import RadioInputField from "../../components/RadioInputField";
import { useFormikContext } from "formik";
import PermanentResidencyInSlovakiaPcr7Days from "./Pcr7Days/PermanentResidencyInSlovakia";
import PermanentResidencyInNeighbour from "./Pcr7Days/PermanentResidencyInNeighbour";
import PermanentResidencyInUkraine from "./Pcr7Days/PermanentResidencyInUkraine";
import PermanentResidencyInSlovakiaPendler from "./Pcr7Days/Pendler/PermanentResidencyInSlovakia";
import PermanentResidencyInEu from "./Pcr7Days/Pendler/PermanentResidencyInEu";

function Pcr7Days() {
  const { values } = useFormikContext();

  return (
    <div>
      <Fieldset
        legend={__(
          "Výnimky s negatívnym PCR testom nie starším ako 7 dní",
          "ehranica"
        )}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPcr7Days"
              value="Pendler"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Za posledných 14 dní som bol/a iba v iných  štátoch štátoch EÚ, Islandu, Nórska, Lichtenštajnska, Švajčiarska alebo na Ukrajine - <strong>pendleri</strong>",
                  "ehranica"
                ),
              }}
              conditionalRender={
                <div>
                  <RadioInputField
                    name="exceptionPendler"
                    value="PermanentResidencyInSlovakiaPendler"
                    dangerouslySetInnerHTML={{
                      __html: __(
                        "Mám trvalý alebo prechodný pobyt v Česku, Poľsku, Maďarsku alebo v Rakúsku.",
                        "ehranica"
                      ),
                    }}
                  />
                  <RadioInputField
                    name="exceptionPendler"
                    value="PermanentResidencyInEuPendler"
                    dangerouslySetInnerHTML={{
                      __html: __(
                        "Mám trvalý pobyt alebo prechodný pobyt v iných  štátoch EÚ, Islandu, Nórskka, Lichtenštajnska, Švajčiarska alebo na Ukrajine prihraničných oblastiach Ukrajiny do 100 km od otvoreného hraničného priechodu na územie Slovenskej republiky.",
                        "ehranica"
                      ),
                    }}
                  />
                  <RadioInputField
                    name="exceptionPendler"
                    value="20"
                    dangerouslySetInnerHTML={{
                      __html: __(
                        "Som občanom Slovenska a mám trvalý alebo prechodný pobyt v prihraničných oblastiach susedného štátu do 100 km od otvoreného hraničného priechodu na územie Slovenskej republiky.",
                        "ehranica"
                      ),
                    }}
                  />
                </div>
              }
            />
            <RadioInputField
              name="exceptionPcr7Days"
              value="PermanentResidencyInSlovakiaPcr7Days"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám trvalý alebo prechodný pobyt v Slovenskej republike.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPcr7Days"
              value="PermanentResidencyInNeighbourPcr7Days"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám trvalý alebo prechodný pobyt v Česku, Poľsku, Maďarsku alebo v Rakúsku.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPcr7Days"
              value="PermanentResidencyInUkraine"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám trvalý alebo prechodný pobyt na Ukrajine.",
                  "ehranica"
                ),
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
