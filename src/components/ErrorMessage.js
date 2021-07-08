import React from "react";
import { ErrorMessage as FormikErrorMessage } from "formik";
import { useTranslation } from "react-i18next";

function ErrorMessage({ name }) {
  const { t } = useTranslation("common");

  return (
    <FormikErrorMessage name={name}>
      {(msg) => <span className="govuk-error-message">{t(`form.errors.${msg}`)}</span>}
    </FormikErrorMessage>
  );
}

export default ErrorMessage;
