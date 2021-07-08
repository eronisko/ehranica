import React from "react";
import Fieldset from "../../components/Fieldset";
import RadioInputField from "../../components/RadioInputField";
import { useFormikContext } from "formik";
import Politican from "./Pcr72Hours/Politician";
import Ministry from "./Pcr72Hours/Ministry";
import Sport from "./Pcr72Hours/Sport";
import Culture from "./Pcr72Hours/Culture";
import { useTranslation } from "react-i18next";

function Pcr72Hours() {
  const {t} = useTranslation('common');
  const { values } = useFormikContext();

  return (
    <div>
      <Fieldset
        legend={t("exceptions.pcr72Hours.legend")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionPcr72Hours"
              value="49"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.49")
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="36"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.36")
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="Politician"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.Politician")
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="MinistryPcr72Hours"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.MinistryPcr72Hours")
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="Sport"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.Sport")
              }}
            />
            <RadioInputField
              name="exceptionPcr72Hours"
              value="Culture"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.Culture")
              }}
            />
          </div>
        </div>
      </Fieldset>

      {values.exceptionPcr72Hours === "Politician" && <Politican />}
      {values.exceptionPcr72Hours === "MinistryPcr72Hours" && <Ministry />}
      {values.exceptionPcr72Hours === "Sport" && <Sport />}
      {values.exceptionPcr72Hours === "Culture" && <Culture />}
    </div>
  );
}

export default Pcr72Hours;
