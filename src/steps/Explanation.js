import React from "react";
import Button from "components/Button";
import InputField from "components/InputField";
import DateField from "components/Date";
import * as Yup from "yup";
import RadioInputField from "components/RadioInputField";
import CountryField, { Countries } from "components/CountryField";
import ErrorMessage from "components/ErrorMessage";
import Fieldset from "components/Fieldset";
import Link from "components/Link";
import { FieldArray, useFormikContext } from "formik";
import {
  validDate,
  allowedPhoneNumber,
  slovakId,
  birthNumberToDate,
  validArrivalDate,
} from "validations/Validations";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Explanation() {
  return (
    <div>
      <h2 className="govuk-heading-l">Predtým ako začnete</h2>
      <ul className="govuk-list govuk-list--bullet">
        <li>
          Ak ste aktuálne objednaný/á prostredníctvom NCZI na RT-PCR alebo
          antigénový test, prosím počkajte na výsledok testu a až následne sa
          zaregistrujte do eHranice. Inak to nebude možné.
        </li>
        <li>
          Ak sa Vám nepodarilo zaregistrovať sa do eHranice, môže to byť
          spôsobená tým, že ste bojednaný/á na RT-PCR alebo antigénový test.
          Počkajte na jeho výsledok a potom sa zaregistrujte do eHranice.
        </li>
        <li>
          Ak sa <strong>najprv zaregistrujte do eHranice</strong>, potom sa
          môžete zaregistrovať prostredníctvom NCZI na RT-PCR alebo antigénový
          test. Pokiaľ Vám je nariadená domáca izolácia, na test Vás objednáme
          automaticky.{" "}
        </li>
        <li>
          Ak ste v nariadenej domácej izolácii a chcete sa zaregistrovať do
          eHranice, prosím počkajte na ukončenie domácej izolácie buď negatívnym
          testom najskôr na 5 deň izolácie alebo po uplynutí 14 dní.{" "}
        </li>
      </ul>
      <Button label="Začať" />
    </div>
  );
}

export default Explanation;
