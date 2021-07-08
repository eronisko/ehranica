import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../components/Fieldset";
import ErrorMessage from "../components/ErrorMessage";
import RadioInputField from "../components/RadioInputField";
import { useFormikContext } from "formik";
import WithoutTest from "./Start/WithoutTest";
import Pcr72Hours from "./Start/Pcr72Hours";
import Ag7Days from "./Start/Ag7Days";
import Pcr7Days from "./Start/Pcr7Days";

function Start(props) {
  const { values } = useFormikContext();

  return (
    <div>
      <div className="govuk-warning-text">
        <span className="govuk-warning-text__icon" aria-hidden="true">
          !
        </span>
        <strong className="govuk-warning-text__text">
          <span className="govuk-warning-text__assistive">
            {__("Upozornenie")}
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: __(
                'Podmienky pre vstup na Slovensko sú prísne. Pre vstup do krajiny nestačí negatívny test! Ak nespĺňate podmienky pre niektorú z výnimiek, vzťahuje sa na Vás povinná domáca izolácia alebo izolácia v karanténnom zariadení. <a href="https://korona.gov.sk/cestovanie-do-sr/#vynimky-pre-nezaockovanych" target="_blank">Prehľad výnimiek</a>.'
              ),
            }}
          />
        </strong>
      </div>

      <Fieldset
        legend={__("Nemám výnimku z absolvovania domácej izolácie", "ehranica")}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <ErrorMessage name="exception" />
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionStart"
              value="noException"
              dangerouslySetInnerHTML={{
                __html: __(
                  "<strong>Nemám žiadnu výnimku</strong>  z absolvovania domácej izolácie.",
                  "ehranica"
                ),
              }}
            />
          </div>
        </div>
      </Fieldset>
      <Fieldset
        legend={__("Mám výnimku z absolvovania domácej izolácie", "ehranica")}
      >
        <p className="govuk-body">
          {__(
            "Po zakliknutí niektorej z ďalších možností uvidíte detailný prehľad výnimiek. Ak označíte nesprávnu možnosť, neobávajte sa. Budete sa môcť vrátiť o krok späť."
          )}
        </p>
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionStart"
              value="WithoutTest"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám výnimku, ktorá <strong>nevyžaduje negatívny výsledok testu.</strong>",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionStart"
              value="Pcr72Hours"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám výnimku, ktorá vyžaduje negatívny výsledok <strong>PCR testu nie starší ako  72-hodín.</strong>",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionStart"
              value="Pcr7Days"
              insetText={__(
                "Obsahuje aj výnimku pre <strong>pendlerov</strong>."
              )}
              alwaysExpandedInsetText={true}
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám výnimku, ktorá vyžaduje negatívny výsledok <strong>PCR testu nie starší ako 7 dní.</strong>",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionStart"
              value="Ag7Days"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Mám výnimku, ktorá vyžaduje negatívny výsledok <strong>antigénového testu nie starší ako 7 dní.</strong>",
                  "ehranica"
                ),
              }}
            />
          </div>
        </div>
      </Fieldset>

      {values.exceptionStart === "WithoutTest" && <WithoutTest />}
      {values.exceptionStart === "Pcr72Hours" && <Pcr72Hours />}
      {values.exceptionStart === "Pcr7Days" && <Pcr7Days />}
      {values.exceptionStart === "Ag7Days" && <Ag7Days />}
    </div>
  );
}

export default Start;
