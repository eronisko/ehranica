import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function Driver() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset legend={t("exceptions.withoutTest.legendDriver")}> 
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionDriver"
              value="5"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.5")
              }}
            />
            <RadioInputField
              name="exceptionDriver"
              value="13"
              insetText={t("exceptions.list.13hint")}
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.13")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default Driver;
