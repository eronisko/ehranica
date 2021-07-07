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
              name="exceptionPermanentResidencyInNeighbourPcr7Days"
              value="22"
              dangerouslySetInnerHTML={{
                __html: __(
                  "V dobe prekročenia hranice Slovenska na území Slovenska aktívne navštevujú, študujú alebo sa uchádzajú o navštevovanie alebo štúdium na materskej, základnej, strednej škole alebo vysokej škole a o prezenčnej forme štúdia potvrdenie vydané školou <strong>alebo som sprievodná osoba</strong> žiaka alebo študenta a mám o tom doklad.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInNeighbourPcr7Days"
              value="28"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Prekračujem hranicu Slovenska z dôvodu neodkladnej starostlivosti o blízkych rodinných príslušníkov na území Slovenskej republiky, ktorí nie sú schopní sa sami o seba postarať a a mám doklad o neodkladnej starostlivosti od ošetrujúceho lekára blízkeho rodinného príslušníka a čestným prehlásením o rodinnom vzťahu; oboje v slovenskom jazyku.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInNeighbourPcr7Days"
              value="30"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Obhospodarujem pozemky nachádzajúce sa na území Slovenska do vzdialenosti 10 km od štátnej hranice Česka, Poľska, Maďarska alebo Rakúska a viem sa preukázať o tejto skutočnosti.",
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
