import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../components/Fieldset";
import RadioInputField from "../../components/RadioInputField";
import { useFormikContext } from "formik";
import Driver from "./WithoutTest/Driver";
import Ministry from "./WithoutTest/Ministry";

function WithoutTest(props) {
  const { values } = useFormikContext();

  return (
    <div>
      <Fieldset
        legend={__(
          "Výnimky, ktoré nevyžadujú negatívny výsledok testu",
          "ehranica"
        )}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionWithoutTest"
              value="Driver"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som vodič alebo člen posádky (dopravy - železničná, osobná, letecká, nákladná, autobusová, lodná, preprava osôb na letiská, repriácia osôb, pohrebná služba, zdravotná služba - transport pacientov, orgánov a krvi).",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionWithoutTest"
              value="MinistryWithoutTest"
              dangerouslySetInnerHTML={{
                __html: __("Výnimky udeľované Ministerstvami.", "ehranica"),
              }}
            />
            <RadioInputField
              name="exceptionWithoutTest"
              value="11"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Som držiteľ diplomatického alebo služobného pasu vstupujúci na územie Slovenskej republiky.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionWithoutTest"
              value="12"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Na základe  právoplatného súdneho rozhodnutia vo veci vykonávania striedavej starostlivosti rodičov o maloleté dieťa, alebo práva styku s maloletým dieťaťom. Musíte sa preukázať pravoplatným súdnym rozhodnutím súdu alebo rodičovskou dohodou a informovať  Centrum pre medzinárodnoprávnu ochranu detí a mládeže na Ministerstve  práce, sociálnych vecí a rodiny SR.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionWithoutTest"
              value="17"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Prekračujem hranicu Slovenskej republiky z dôvodu návštevy zastupiteľského úradu cudzej krajiny akreditovaného pre Slovenskú republiku, ktorý sa nachádza na území Českej republiky, Maďarska alebo Rakúskej republiky, na dobu kratšiu než 12 hodín a zároveň mám trvalý alebo prechodný pobyt na území Slovenskej republiky a viem sa preukázať o návšteve zastupiteľského úradu.",
                  "ehranica"
                ),
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
