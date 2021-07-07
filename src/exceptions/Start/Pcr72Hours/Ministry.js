import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import Accordion from "../../../components/Accordion";

function Ministry() {
  return (
    <div>
      <Fieldset legend={__("Výnimky udeľované Ministerstvami", "ehranica")}>
        <Accordion.Group>
          <Accordion.Section title={__("Ministerstvo hospodárstva SR")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="42"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku odsúhlasenú Ministerstvom pre osoby, ktoré sú zamestnancami prevádzkovateľov prvkov kritickej infraštruktúry v sektore energetika a priemysel, ako aj zamestnancami ich subdodávateľov, na žiadosť príslušného prevádzkovateľa prvkov kritickej infraštruktúry, ktorí nepretržitým spôsobom zabezpečujú strategicky a životne dôležité funkcie chodu Slovenskej republiky.",
                      "ehranica"
                    ),
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="43"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku odsúhlasenú Ministerstvom pre osoby, ktoré sú expertami/špecialistami/technikmi pre odstránenie krízových situácií v sektore priemysel.",
                      "ehranica"
                    ),
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section
            title={__(
              "Ministerstvo zahraničných vecí a európskych záležitostí SR"
            )}
          >
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="39"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Som zamestnanec medzinárodných organizácií, medzinárodných finančných inštitúcií a inštitúcií Európskej únie, ktorí majú na území Slovenskej republiky miesto výkonu práce alebo ich rodinný príslušník.",
                      "ehranica"
                    ),
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section
            title={__("Ministerstvo školstva, vedy, výskumu a športu SR")}
          >
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="34"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Som reprezentant Slovenska alebo člen realizačných tímov podľa dekrétu Ministerstva školstva, vedy, výskumu a športu Slovenskej republiky, vrátane držiteľov dekrétu kandidáta Hier XXXII. olympiády Tokio 2020, Hier XXIV zimných olympijských hier Peking 2022, alebo XVI. paralympijských hrách Tokio 2020, ktorí vstupujú na územie SR pri návrate z medzinárodného športového podujatia alebo sústredenia za účelom ich prípravy na medzinárodné podujatia a mám o tom potvrdenie.",
                      "ehranica"
                    ),
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="51"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Som športovec, člen realizačného tímu, rozhodca alebo člen organizačného výboru a vstupujem na Slovnesko za účelom účasti na medzinárodnom športovom podujatí, ktoré bolo ohlásené príslušnému regionálnemu úradu verejného zdravotníctva na základe podporného stanoviska Ministerstva školstva, vedy, výskumu a športu Slovenskej republiky ako jednorazové hromadné podujaties dĺžkou trvania do 48 hodín a mám o tom potvrdenie.",
                      "ehranica"
                    ),
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="52"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Som športovec, člen realizačného tímu, rozhodca alebo člen organizačného výboru podujatia, ktoré bolo ohlásené príslušnému regionálnemu úradu verejného zdravotníctva na základe podporného stanoviska Ministerstva školstva, vedy, výskumu a športu Slovenskej republiky ako jednorazové hromadné podujatie s dĺžkou trvania nad 4 dni a mám o tom potvrdenie.",
                      "ehranica"
                    ),
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section
            title={__("Ministerstvo pôdohospodárstva a rozvoja vidieka SR")}
          >
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="45"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku odsúhlasenú Ministerstvom pre osoby dôležité z hľadiska udržania prevádzkyschopnosti prevádzok vykonávajúcich činnosť v sektoroch poľnohospodárstva, potravinárstva, lesného hospodárstva a pre osoby zabezpečujúce veterinárnu starostlivosť pre hospodárske zvieratá.",
                      "ehranica"
                    ),
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="46"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku odsúhlasenú Ministerstvom pre osoby, ktoré sú vlastníkmi alebo držiteľmi zvierat za účelom zabezpečenia špecializovaného diagnostického veterinárneho vyšetrenia, chirurgického zákroku alebo liečby zvierat, ktorú poskytujú špecializované veterinárne pracoviská v iných členských štátoch Európskej únie.",
                      "ehranica"
                    ),
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="47"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku odsúhlasenú Ministerstvom pre osoby zabezpečujúce servis a údržbu poľnohospodárskej a lesnej techniky, posádky poľnohospodárskej a lesnej techniky a ich sprievod.",
                      "ehranica"
                    ),
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={__("Ministerstvo zdravotníctva SR")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="48"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku odsúhlasenú Ministerstvom pre osoby, ktoré vstupujú alebo opúšťajú územie Slovenskej republiky za účelom servisných, inštalačných a revíznych služieb zdravotníckej techniky, zabezpečenia školenia zdravotníckych zamestnancov, monitorov klinických štúdií, osoby zabezpečujúce plynulý chod zdravotníckej infraštruktúry.",
                      "ehranica"
                    ),
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={__("Ministerstvo dopravy a výstavby SR")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="44"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku odsúhlasenú Ministerstvom pre osoby, ktoré zamestnancami prevádzkovateľov prvkov kritickej infraštruktúry v sektore elektronických komunikácií.",
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
                  name="exceptionMinistryPcr72Hours"
                  value="50"
                  dangerouslySetInnerHTML={{
                    __html: __(
                      "Mám výnimku odsúhlasenú Ministerstvom pre osoby, ktoré vstupujú na územie Slovenskej republiky na základe žiadosti súdu alebo orgánov činných v trestnom konaní.",
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
