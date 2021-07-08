import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function Politican() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr72Hours.legendPolitician")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPolitician"
              value="37"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.37")
              }}
            />
            <RadioInputField
              name="exceptionPolitician"
              value="38"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.38")
              }}
            />
            <RadioInputField
              name="exceptionPolitician"
              value="40"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.40")
              }}
            />
            <RadioInputField
              name="exceptionPolitician"
              value="41"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.41")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default Politican;
