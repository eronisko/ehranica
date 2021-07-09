import React from "react";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";
import Accordion from "../../../components/Accordion";
import { useTranslation } from "react-i18next";

function Ministry() {
  const {t} = useTranslation('common');

  return (
    <div>
      <Fieldset legend={t("exceptions.pcr72Hours.legendMinistry")}>
        <Accordion.Group>
          <Accordion.Section title={t("ministry.ministryOfEconomy")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="42"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.42")
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="43"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.43")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section
            title={t("ministry.ministryOfForeign")}
          >
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="39"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.39")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section
            title={t("ministry.ministryOfEducation")}
          >
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="34"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.34")
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="51"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.51")
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="52"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.52")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section
            title={t("ministry.ministryOfAgriculture")}
          >
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="45"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.45")
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="46"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.46")
                  }}
                />
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="47"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.47")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={t("ministry.ministryOfHealth")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="48"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.48")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={t("ministry.ministryOfTransport")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="44"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.44")
                  }}
                />
              </div>
            </div>
          </Accordion.Section>
          <Accordion.Section title={t("ministry.ministryOfInterior")}>
            <div className="govuk-form-group govuk-!-margin-bottom-1">
              <div className="govuk-radios">
                <RadioInputField
                  name="exceptionMinistryPcr72Hours"
                  value="50"
                  dangerouslySetInnerHTML={{
                    __html: t("exceptions.list.50")
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
