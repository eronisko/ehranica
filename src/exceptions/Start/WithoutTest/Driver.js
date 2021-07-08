import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";

function Driver() {
  return (
    <div>
      <Fieldset legend={__("Vodič alebo člen posádky", "ehranica")}>
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionDriver"
              value="5"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som vodič alebo posádka osobnej dopravy, leteckej dopravy alebo autobusovej dopravy, ktorí vykonávajú prepravu repatriovaných osôb na územie Slovenskej republiky.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionDriver"
              value="13"
              insetText={__(
                '<strong>Osoby zabezpečujúce prepravu sú povinné</strong> sa najneskôr pred prechodom štátnej hranice zo Slovenskej republiky zaregistrovať na webe <a href="https://naletisko.mzv.sk/" target="_blank">naletisko.mzv.sk</a> a preukázať sa na požiadanie príslušníkom Policajného zboru vytlačeným alebo elektronickým potvrdením o splnení tejto povinnosti a letenkou prepravovanej osoby alebo jej elektronickou kópiou. Osoby zabezpečujúce prepravu sú povinné vykonať cestu výhradne cez územie členských štátov Európskej únie, a to bez zastavenia, okrem zastavenia na nevyhnutné tankovanie pohonných hmôt a nástup prepravovanej osoby.'
              )}
              dangerouslySetInnerHTML={{
                __html: __(
                  "Osoby zabezpečujúce prepravu iných osôb z a na medzinárodné letiská na území Česka, Poľska, Maďarska alebo Rakúska.",
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

export default Driver;
