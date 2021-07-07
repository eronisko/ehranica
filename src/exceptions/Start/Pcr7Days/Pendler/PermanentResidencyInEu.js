import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../../components/Fieldset";
import RadioInputField from "../../../../components/RadioInputField";

function PermanentResidencyInEu() {
  return (
    <div>
      <Fieldset
        legend={__("Dodatočné podmienky na vstup na Slovensko", "ehranica")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInEuPendler"
              value="19"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám potvrdenie o tom, že mám uzatvorený pracovnoprávny vzťah, obdobný pracovný vzťah alebo miesto výkonu práce na území Slovenskej republiky a zároveň mám potvrdenie o tom, že som držiteľ/ka potvrdenia od zamestnávateľa o takomto výkone práce alebo potvrdenia o takomto výkone práce, podľa prílohy č. 3.",
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

export default PermanentResidencyInEu;
