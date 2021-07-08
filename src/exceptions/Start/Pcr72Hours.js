import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../components/Fieldset";
import RadioInputField from "../../components/RadioInputField";
import { useFormikContext } from "formik";
import Politican from "./Pcr72Hours/Politician";
import Ministry from "./Pcr72Hours/Ministry";
import Sport from "./Pcr72Hours/Sport";
import Culture from "./Pcr72Hours/Culture";

function Pcr72Hours() {
  const { values } = useFormikContext();

  return (
    <div>
      <Fieldset
        legend={__(
          "Výnimky s negatívnym výsledkom PCR testu nie starším ako 72-hodín",
          "ehranica"
        )}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPcr72Hours"
              value="49"
              dangerouslySetInnerHTML={{
                __html: __(
                  'Mám trvalé kontraindikácie očkovania na základe potvrdenia od lekára podľa <a href="#" target="_blank">Prílohy č. 4.</a>',
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="36"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Krátkodobo vstupujem alebo opúšťam Slovensko za účelom účasti na pohrebe blízkej osoby a mám o tom potvrdennie alebo som sprievodná osoba a mám o tom doklad.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="Politician"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Vykonávam politickú funkciu (oficiálne návštevy, delegácie, poslanci EP, zastupiteľské úrady).",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="MinistryPcr72Hours"
              dangerouslySetInnerHTML={{
                __html: __("Výnimky udeľované Ministerstvami.", "ehranica"),
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="Sport"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som hráč športového tímu, člen realizačného výboru alebo rozhodca.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="Culture"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Pracujem v kultúre alebo výskume (redaktori, herci, reštaurátori a podobne).",
                  "ehranica"
                ),
              }}
            />
          </div>
        </div>
      </Fieldset>

      {values.exceptionPcr72Hours === "Politician" && <Politican />}
      {values.exceptionPcr72Hours === "MinistryPcr72Hours" && <Ministry />}
      {values.exceptionPcr72Hours === "Sport" && <Sport />}
      {values.exceptionPcr72Hours === "Culture" && <Culture />}
    </div>
  );
}

export default Pcr72Hours;
