import React, { useState, useEffect } from "react";
import { withWizard } from "react-albus";
import { __ } from "@wordpress/i18n";
import Panel from "../components/Panel";
import InsetText from "../components/InsetText";
import ErrorMessage from "../components/ErrorMessage";
import RadioInputField from "../components/RadioInputField";
import InputField from "../components/InputField";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import WarningText from "../components/WarningText";
import { thankYouMessage } from "helpers/Helpers";

function StepFinal({ wizard }) {
  const { values } = useFormikContext();

  let panelBody = thankYouMessage(values.exceptionId);

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Panel
        heading={__("Registrácia dokončená", "ehranica")}
        body={panelBody}
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
          title={__(
            "Ohodnoťte službu e-Hranica.",
            "ehranica"
          )}
        >
          {__(
            "Ohodnoťte službu e-Hranica.",
            "ehranica"
          )}
        </a>
      </p>
      <h2 className="govuk-heading-m">
        {__(
          "Ďaľšie akcie",
          "ehranica"
        )}
      </h2>
      <div className="govuk-button-group">
        <Button 
          label={__(
            "Zaregistrovať ďalšiu osobu", 
            "ehranica"
          )}
          display="secondary"
        />
        <a href="https://korona.gov.sk" className="govuk-button govuk-button--secondary govuk-!-margin-left-5" data-module="govuk-button">
          {__(
            "Späť na korona.gov.sk",
            "ehranica"
          )}
        </a>
      </div>
    </div>
  );
  // }
}

let StepFinalWithWizard = withWizard(StepFinal);

StepFinalWithWizard.initialValues = {
  // under18HouseholdMemberIsolation: ''
};

StepFinalWithWizard.validationSchema = Yup.object({
  // under18HouseholdMemberIsolation: Yup.string().required()
});

export default StepFinalWithWizard;
