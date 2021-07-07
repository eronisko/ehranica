import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";

function Culture() {
  return (
    <div>
      <Fieldset
        legend={__(
          "Mám výnimku na základe toho, že pracujem v kultúre alebo výskume ",
          "ehranica"
        )}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionCulture"
              value="31"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám trvalý alebo prechodný pobyt v Slovenskej republike, Českej republike, Poľskej republike, Maďarsku alebo Rakúskej republike, podieľam sa ako účinkujúci alebo člen štábu na území Slovenska, Česka, Poľska, Maďarska alebo Rakúska na cezhraničnej produkcii <strong>audiovizuálneho diela</strong> alebo <strong>televízneho programu</strong>, alebo ako <strong>vyslaný redaktor</strong> alebo <strong>člen štábu</strong> na spravodajskej mediálnej produkcii, podieľam sa ako účinkujúci alebo člen štábu na cezhraničnej produkcii vrátane skúšania alebo on-line vysielania divadelného diela, hudobno-dramatického diela alebo hudobného diela, podieľam sa na reštaurovaní, podieľam sa na výskume na archeologickom nálezisku, v múzeu, archíve alebo v inej pamäťovej, akademickej alebo vedeckej inštitúcii, podieľam sa na inštalácii alebo odinštalovaní výstavy v múzeu, galérii alebo výstavnej sieni, alebo mam angažmán v divadle alebo hudobnej inštitúcii a mám potvrdenie od osoby zodpovednej za realizáciu činnosti.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionCulture"
              value="35"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Podieľam sa na audiovizuálnej tvorbe na <strong>Hrách XXXII. olympiády Tokio 2020, XXIV. zimných olympijských hier Peking 2022</strong>, alebo <strong>XVI. paralympijských hrách Tokio 2020</strong> alebo <strong>medzinárodnom športovom podujatí</strong>, ktoré bolo ohlásené príslušnému regionálnemu úradu verejného zdravotníctva na základe podporného stanoviska Ministerstva školstva, vedy, výskumu a športu Slovenskej republiky ako jednorazové hromadné podujatie s dĺžkou trvania do 48 hodín alebo nad 4 dni.",
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

export default Culture;
