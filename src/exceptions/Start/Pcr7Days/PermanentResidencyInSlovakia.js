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
              name="exceptionPermanentResidencyInSlovakiaPcr7Days"
              value="21"
              dangerouslySetInnerHTML={{
                __html: __(
                  "V dobe prekročenia hranice Slovenska aktívne navštevujem, študujem alebo sa uchádzam o navštevovanie alebo štúdium na materskej, základnej, strednej škole alebo vysokej škole v Česku, Poľsku, Maďarsku, Ukrajine alebo Rakúsku a mám potvrdenie vydané školou <strong>alebo som sprievodná osoba</strong> (maximálne 1 osoba) žiaka alebo študenta a mám o tom doklad.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaPcr7Days"
              value="23"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som žiak, študent strednej alebo vysokej školy do 26 rokov a zúčastňujem sa tréningového procesu, ako riadni členovia športového klubu v Česku, Poľsku Maďarsku alebo Rakúsku a mám o tom doklad od príslušných inštitúcií alebo som sprievodná osoba (maximálne 1 osoba) žiaka alebo študenta a mám o tom doklad.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaPcr7Days"
              value="27"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Poskytujem neodkladnú starostlivosti o blízkych rodinných príslušníkov na území susedného štátu, ktorí nie sú schopní sa sami o seba postarať a mám doklad o neodkladnej starostlivosti od ošetrujúceho lekára blízkeho rodinného príslušníka a čestným prehlásením o rodinnom vzťahu; oboje v slovenskom jazyku.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPermanentResidencyInSlovakiaPcr7Days"
              value="29"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Obhospodarujem pozemky nachádzajúce sa na území Českej republiky, Poľskej republiky, Maďarska alebo Rakúskej republiky do vzdialenosti 10 km od štátnej hranice Slovenskej republiky a viem sa preukázať o tejto skutočnosti.",
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
