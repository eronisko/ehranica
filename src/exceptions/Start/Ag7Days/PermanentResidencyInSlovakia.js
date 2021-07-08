import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";

function PermanentResidencyInSlovakia() {
  return (
    <div>
      <Fieldset
        legend={__("Dodatočné podmienky na vstup na Slovensko", "ehranica")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaAg7Days"
              value="24"
              dangerouslySetInnerHTML={{
                __html: __(
                  "V dobe prekročenia hranice Slovenska aktívne navštevujem, študujem alebo sa uchádzam o navštevovanie alebo štúdium na materskej, základnej, strednej alebo vysokej škole v Česku, Poľsku, Maďarsku, Ukrajine alebo Rakúsku a mám potvrdenie vydané školou alebo som sprievodná osoba žiaka alebo študenta a mám o tom doklad.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaAg7Days"
              value="26"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som žiak/študent strednej alebo vysokej školy do 26 rokov a zúčastňujem sa tréningového procesu ako riaden člen športového klubu v Česku, Poľsku, Maďarsku alebo Rakúsku a mám o tom doklad od príslušných inštitúcií <strong>alebo som sprievodná osoba žiaka alebo študenta</strong> a mám o tom doklad.",
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

export default PermanentResidencyInSlovakia;
