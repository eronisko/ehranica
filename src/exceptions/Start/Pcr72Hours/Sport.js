import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import { useTranslation } from "react-i18next";

function Sport() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr72Hours.legendSport")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionSport"
              value="32"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.32")
              }}
            />
            <RadioInputField
              name="exceptionSport"
              value="33"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.33")
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default Sport;
