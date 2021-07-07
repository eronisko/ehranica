import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../components/Fieldset";
import RadioInputField from "../../components/RadioInputField";
import { useFormikContext } from "formik";
import PermanentResidencyInSlovakia from "./Ag7Days/PermanentResidencyInSlovakia";
import PermanentResidencyInNeighbour from "./Ag7Days/PermanentResidencyInNeighbour";

function Ag7Days() {
  const { values } = useFormikContext();

  return (
    <div>
      <Fieldset
        legend={__(
          "Výnimky s negatívnym výsledok antigénového testu nie starším ako 7 dní",
          "ehranica"
        )}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionAg7Days"
              value="PermanentResidencyInSlovakiaAg7Days"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám trvalý alebo prechodný pobyt v Slovenskej republike.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionAg7Days"
              value="PermanentResidencyInNeighbourAg7Days"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám trvalý alebo prechodný pobyt v Česku, Poľsku, Maďarsku alebo v Rakúsku. ",
                  "ehranica"
                ),
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
