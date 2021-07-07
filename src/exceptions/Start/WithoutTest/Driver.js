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
              value="4"
              insetText={__(
                '<p>Tieto osoby sú oprávnené prekračovať hranicu Slovenskej republiky aj inými spôsobmi dopravy na presun do miesta, kde budú vykonávať svoju činnosť alebo pri návrate domov, ak sa preukážu potvrdením od zamestnávateľa v štátnom jazyku Slovenskej republiky alebo osvedčením pre pracovníkov v medzinárodnej doprave, ktorého vzor je uvedený v <a href="#">prílohe č. 3</a> oznámenia Európskej komisie o uplatňovaní zelených jazdných pruhov (Green Lanes).</p>' +
                  "<p>Zamestnancom v železničnej doprave vyhotoví zamestnávateľ potvrdenie, ktoré preukáže, že prechod štátnej hranice im vyplýva z povahy ich práce, ktorou zabezpečujú železničnú dopravu.</p>"
              )}
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som vodič alebo člen posádky (dopravy - železničná, osobná, letecká, nákladná, autobusová, lodná, preprava osôb na letiská, repriácia osôb, pohrebná služba, zdravotná služba - transport pacientov, orgánov a krvi).",
                  "ehranica"
                ),
              }}
            />
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
              value="6"
              insetText={__(
                "<p>1. transport pacienta musíte vykonávať len vozidlami, v ktorých je oddelený priestor pre pacienta.</p>" +
                  "<p>2. pri transporte musíte používať osobné ochranné pracovné pomôcky a dezinfekčné prostriedky na pravidelné čistenie rúk.</p>"
              )}
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som vodič alebo posádka zdravotnej služby, ktorá vykonáva transport pacienta a som vodič alebo posádka, ktorá vykonáva prevoz orgánov určených na transplantáciu, krv a krvné náhrady.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionDriver"
              value="7"
              insetText={__(
                "<p>1. Pri preberaní, odovzdávaní a nakladaní ľudských pozostatkov alebo ľudských ostatkov musíte používať respirátory FFP2 / FFP3.</p>" +
                  "<p>2. Maximálne obmedziť priamy kontakt s osobami v zahraničí.</p>" +
                  "<p>3. Musíte mať vozidlo vybavené gumenými rukavicami a dezinfekčné prostriedky na pravidelné čistenie rúk.</p>"
              )}
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som zamestnanec pohrebných služieb, ktorý vykonáva medzinárodnú prepravu ľudských pozostatkov alebo ľudských ostatkov na pochovanie alebo spopolnenie.",
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
