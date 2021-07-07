import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";

function PermanentResidencyInNeighbour() {
  return (
    <div>
      <Fieldset
        legend={__("Dodatočné podmienky na vstup na Slovensko", "ehranica")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInNeighbourAg7Days"
              value="25"
              dangerouslySetInnerHTML={{
                __html: __(
                  "V dobe prekročenia hranice Slovenska na území Slovenska aktívne navštevujem, študujem alebo sa uchádzam o navštevovanie alebo štúdium na materskej, základnej, strednej škole alebo vysokej škole a o prezenčnej forme štúdia mám potvrdenie vydané školou alebo som sprievodná osoba žiaka alebo študenta a mám o tom doklad.",
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
