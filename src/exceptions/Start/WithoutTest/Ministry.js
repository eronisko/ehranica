import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import Accordion from "../../../components/Accordion";
import { useTranslation } from "react-i18next";

function Ministry() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset legend={t("exceptions.withoutTest.legendMinistry")}>
        <Accordion.Group>
          <Accordion.Section title={t("ministry.ministryOfHealth")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="8"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.8")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={t("ministry.ministryOfInterior")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="9"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.9")
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="14"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.14")
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="15"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.15")
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="16"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.16")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={t("ministry.ministryOfDefence")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryWithoutTest"
                  value="10"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.10")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
        </Accordion.Group>
      </Fieldset>
    </div>
  );
}

export default Ministry;
