import React from "react";
import { withWizard } from "react-albus";
import { useTranslation } from "react-i18next";
import Result from "../components/Result";

function YoungerThan12({ wizard }) {
  const {t} = useTranslation('common');
  return (
    <Result
      title={t("youngerThan12.title")}
      body={t("youngerThan12.body")}
    />
  );
}

export default withWizard(YoungerThan12);
