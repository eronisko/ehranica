import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";

function Politican() {
  return (
    <div>
      <Fieldset
        legend={__("Výnimka pri výkone politickej funkcie", "ehranica")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPolitician"
              value="37"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Vstupujem na územie Slovenska a som oficiálne pozvaná osoba na podujatia usporadúvané Kanceláriou prezidenta SR, Národnou radou SR, vládou SR, alebo ústrednými orgánmi štátnej správy a mám potvrdením o uvedenej skutočnosti.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPolitician"
              value="38"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som členom delegácie zastupujúcej Slovensko na úrovni Kancelárie prezidenta, Národnej rady, vlády a ústredných orgánov štátnej správy, štátnym zamestnancom a zamestnancom pri výkone práce vo verejnom záujme vyslanými na zahraničnú pracovnú cestu za účelom plnenia pracovných úloh alebo vyslanými na plnenie úloh vyplývajúcich zo zastupovania Slovenskej republiky v zahraničí.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPolitician"
              value="40"
              dangerouslySetInnerHTML={{
                __html: __(
                  " Som poslanec Európskeho parlamentu zvolenými v Slovenskej republike alebo som rodinným príslušníkom.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionPolitician"
              value="41"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som vyslaná osoba na zastupiteľský úrad Slovenskej republiky, alebo vyslaná na plnenie úloh vyplývajúcich zo zastupovania Slovenskej republiky v medzinárodnej organizácii alebo medzinárodného vojenského zastupiteľstva mimo územia Slovenskej republiky a vstupujem počas a po skončení vyslania v cudzine spolu  alebo som rodinným príslušníkom.",
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

export default Politican;
