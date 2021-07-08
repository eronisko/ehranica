import React from "react";
import { withWizard } from "react-albus";
import { __ } from "@wordpress/i18n";
import Result from "../components/Result";

function YoungerThan12({ wizard }) {
  return (
    <Result
      title={__("Registrácia nie je potrebná", "ehranica")}
      body={__(
        "<p>Ďakujeme, že ste sa chceli zaregistrovať do eHranice. <strong>Deti do 12 rokov sa nemusia registrovať.</strong></p>" +
          "<p>Platí pre ne to isté, čo pre osoby žijúce s nimi v spoločnej domácnosti. Teda, ak má niektorý člen spoločnej domácnosti absolvovať povinnú karanténu, platí to aj pre dieťa. A naopak, ak sa na členov spoločnej domácnosti vzťahuje výnimka z karantény, výnimka platí aj pre dieťa.</p>",
        "ehranica"
      )}
    />
  );
}

export default withWizard(YoungerThan12);
