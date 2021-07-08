import React from "react";
import { withWizard } from "react-albus";
import Panel from "../components/Panel";
import { __ } from "@wordpress/i18n";
import InsetText from "../components/InsetText";
import WarningText from "../components/WarningText";

function YoungerThan12({ wizard }) {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Panel
        heading={__("Registrácia nie je potrebná", "ehranica")}
        body={__(
          "<p>Ďakujeme, že ste sa chceli zaregistrovať do eHranice. <strong>Deti do 12 rokov sa nemusia registrovať.</strong></p>" +
            "<p>Platí pre ne to isté, čo pre osoby žijúce s nimi v spoločnej domácnosti. Teda, ak má niektorý člen spoločnej domácnosti absolvovať povinnú karanténu, platí to aj pre dieťa. A naopak, ak sa na členov spoločnej domácnosti vzťahuje výnimka z karantény, výnimka platí aj pre dieťa.</p>",
          "ehranica"
        )}
      />
      <InsetText
        content={__(
          'Ak cestujete na Slovensko letecky, musíte taktiež vyplniť formulár na stránke <a href="https://www.mindop.sk/covid-19" target="_blank" class="govuk-link">mindop.sk/covid-19</a>.',
          "ehranica"
        )}
      />
      <WarningText
        content={__(
          'V prípade že prichádzate z <a href="">týchto</a> krajín letecky, musíte mať negatívny 72-hodín starý PCR test.',
          "ehranica"
        )}
      />
      <p className="govuk-body">
        {__(
          "Ďaľšie inštrukcie Vám prídu v najbližších dňoch v SMS správe alebo emailom.",
          "ehranica"
        )}
      </p>
      <p className="govuk-body">
        <a
          className="govuk-link"
          href="#"
          title={__("Ohodnoťte službu e-Hranica.", "ehranica")}
        >
          {__("Ohodnoťte službu e-Hranica.", "ehranica")}
        </a>
      </p>
      <h2 className="govuk-heading-m">{__("Ďaľšie akcie", "ehranica")}</h2>
      <div className="govuk-button-group">
        <a
          href="."
          className="govuk-button govuk-button--secondary"
          data-module="govuk-button"
        >
          {__("Zaregistrovať ďalšiu osobu", "ehranica")}
        </a>
        <a
          href="https://korona.gov.sk"
          className="govuk-button govuk-button--secondary govuk-!-margin-left-5"
          data-module="govuk-button"
        >
          {__("Späť na korona.gov.sk", "ehranica")}
        </a>
      </div>
    </div>
  );
}

export default withWizard(YoungerThan12);
