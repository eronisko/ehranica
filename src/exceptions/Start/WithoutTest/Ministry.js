import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import Accordion from "../../../components/Accordion";

function Ministry() {
  return (
    <div>
      <Fieldset legend={__("Výnimky údeľované Ministerstvami", "ehranica")}>
        <Accordion.Group>
          <Accordion.Section title={__("Ministerstvo zdravotníctva SR")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="8"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      'Mám výnimku po odsúhlasení Ministerstvom na osoby, ktoré vstupujú alebo opúšťajú územie Slovenskej republiky za účelom zabezpečenia akútnej a neodkladnej diagnostiky a liečby, protokolárnej prevencie a liečby a pokračujúcej liečby zdravotných stavov svojich, alebo osôb im blízkym. Osoby, ktoré za týmto účelom vstupujú alebo opúšťajú územie Slovenskej republiky na obdobie kratšie než 12 hodín môže prejsť štátnu hranicu aj bez potvrdenia vystaveného Ministerstvom zdravotníctva Slovenskej republiky ak sa preukážu v ten deň vystaveným lekárskym pozvaním na ošetrenie alebo pri návrate potvrdením o ošetrení. V prípade potreby pobytu presahujúceho 12 hodín je potrebné požiadať o posúdenie žiadosti prostredníctvom webovej stránky Ministerstva zdravotníctva Slovenskej republiky <a href="https://cestujem.standardnepostupy.sk" target="_blank">cestujem.standardnepostupy.sk</a>.',
                      "ehranica"
                    ),
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={__("Ministerstvo vnútra SR")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="9"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku po odsúhlasení Ministerstvom vnútra Slovenskej republiky na vstup príslušníkov policajných zborov alebo tranzit príslušníkov policajných zborov prechádzajúcich územím Slovenskej republiky na plnenie úloh vyplývajúcich z členstva v EÚ.",
                      "ehranica"
                    ),
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="14"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku po odsúhlasení Ministerstvom pre členov zahraničných záchranných tímov alebo expertov podieľajúcich sa na základe žiadosti štátnych orgánov Slovenskej republiky, alebo iného štátu na humanitárnej pomoci počas krízovej situácie alebo na záchranných prácach pri mimoriadnych udalostiach na území Slovenskej republiky alebo iného štátu.",
                      "ehranica"
                    ),
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="15"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku po odsúhlasení Ministerstvom pre osoby vykonávajúce prevoz špeciálnej výjazdovej hasičskej a záchranárskej techniky nevyhnutne potrebnej pre zabezpečenie zásahovej činnosti hasičských jednotiek na vykonanie servisných úkonov a odborných prehliadok.",
                      "ehranica"
                    ),
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="16"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku po odsúhlasení Ministerstvom pre osoby vykonávajúce hasebné práce a záchranné práce pri mimoriadnych udalostiach v prihraničnej oblasti na základe žiadosti operačného strediska susednej krajiny.",
                      "ehranica"
                    ),
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={__("Ministerstvo obrany SR")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="10"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku po schválení Ministerstvom na vstup, tranzit alebo pobyt príslušníkov ozbrojených síl na plnenie úloh vyplývajúcich z členstva EÚ a NATO alebo osôb, ktoré vstupujú na územie Slovenskej republiky za účelom údržby, revízie a opravy techniky a materiálu ako majetku v správe Ministerstva obrany Slovenskej republiky.",
                      "ehranica"
                    ),
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
        </Accordion.Group>
      </Fieldset>
    </div>
  );
}

export default Ministry;
