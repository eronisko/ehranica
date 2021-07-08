import React from "react";
import Fieldset from "../../components/Fieldset";
import RadioInputField from "../../components/RadioInputField";
import { useFormikContext } from "formik";
import Driver from "./WithoutTest/Driver";
import Ministry from "./WithoutTest/Ministry";
import { useTranslation } from "react-i18next";

function WithoutTest(props) {
  const {t} = useTranslation('common');
  const { values } = useFormikContext();

  return (
    <div>
      <Fieldset
        legend={t("exceptions.withoutTest.legend")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionWithoutTest"
              value="Driver"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.Driver")
              }}
            />
            <RadioInputField
              name="exceptionWithoutTest"
              value="MinistryWithoutTest"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.MinistryWithoutTest")
              }}
            />
            <RadioInputField
              name="exceptionWithoutTest"
              value="11"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.11")
              }}
            />
            <RadioInputField
              name="exceptionWithoutTest"
              value="12"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.12")
              }}
            />
            <RadioInputField
              name="exceptionWithoutTest"
              value="17"
              dangerouslySetInnerHTML={{
                __html: t("exceptions.list.17")
              }}
            />
          </div>
        </div>
      </Fieldset>

      {values.exceptionWithoutTest === "Driver" && <Driver />}
      {values.exceptionWithoutTest === "MinistryWithoutTest" && <Ministry />}
    </div>
  );
}

export default WithoutTest;
