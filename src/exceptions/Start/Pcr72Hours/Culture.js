import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function Culture() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr72Hours.legendCulture")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionCulture"
              value="31"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.31")
              }}
            />
            <RadioInputField
              name="exceptionCulture"
              value="35"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.35")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default Culture;
