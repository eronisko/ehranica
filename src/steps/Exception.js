import React from "react";
import { withWizard } from "react-albus";
import * as Yup from "yup";
import Button from "../components/Button";
import Start from "exceptions/Start";
import { isInteger, isNaN, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";

function Exception({ wizard }) {
  const {t} = useTranslation('common');
  const { values } = useFormikContext();

  function exceptionId(groupName) {
    groupName = groupName || "Start";
    const key = "exception" + groupName;

    if (values[key]) {
      if (isInteger(values[key])) {
        return parseInt(values[key]);
      }

      if ("noException" === values[key]) {
        return -1;
      }

      return exceptionId(values[key]);
    }

    return null;
  }

  values.exceptionId = exceptionId();

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="govuk-back-link" href="#" onClick={wizard.previous}>
        {t("global.navigation.back")}
      </a>
      <Start />
      <Button disabled={null === values.exceptionId} />
    </div>
  );
}

Exception.initialValues = {
  exceptionId: null,
  exceptionStart: "",
  exceptionWithoutTest: "",
  exceptionDriver: "",
  exceptionMinistryWithoutTest: "",
  exceptionPcr72Hours: "",
  exceptionMinistryPcr72Hours: "",
  exceptionSport: "",
  exceptionCulture: "",
  exceptionPolitician: "",
  exceptionAg7Days: "",
  exceptionPermanentResidencyInSlovakiaAg7Days: "",
  exceptionPermanentResidencyInNeighbourAg7Days: "",
  exceptionPcr7Days: "",
  exceptionPermanentResidencyInSlovakiaPcr7Days: "",
  exceptionPermanentResidencyInNeighbourPcr7Days: "",
  exceptionPermanentResidencyInUkraine: "",
  exceptionPendler: "",
  exceptionPermanentResidencyInSlovakiaPendler: "",
  exceptionPermanentResidencyInEuPendler: "",
  exceptionPermanentResidencyInNeighbourPendler: "",
};

export default withWizard(Exception);
