import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../../components/Fieldset";
import RadioInputField from "../../../../components/RadioInputField";

function PermanentResidencyInNeighbour() {
  return (
    <div>
      <Fieldset
        legend={__("Dodatočné podmienky na vstup na Slovensko", "ehranica")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInNeighbourPendler"
              value="20"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som občanom Slovenska a mám trvalý alebo prechodný pobyt v prihraničných oblastiach susedného štátu do 100 km od otvoreného hraničného priechodu na územie Slovenskej republiky.",
                  "ehranica"
                ),
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default PermanentResidencyInNeighbour;
