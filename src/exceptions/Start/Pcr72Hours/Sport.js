import React from "react";
import { __ } from "@wordpress/i18n";
import Fieldset from "../../../components/Fieldset";
import RadioInputField from "../../../components/RadioInputField";

function Sport() {
  return (
    <div>
      <Fieldset
        legend={__(
          "Výnimky pre  hráčov športových tímov, členov realizačných tímov alebo rozhodcov",
          "ehranica"
        )}
      >
        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <div className="govuk-radios">
            <RadioInputField
              name="exceptionSport"
              value="32"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Zúčasťňujem sa športových súťaží: <strong>TIPOS extraliga</strong> (hokej - muži), <strong>ICE HOCKEY, LEAGUE</strong> (hokej – muži) alebo <strong>MOL Liga</strong> (hádzaná – ženy) a prekračujem hranice Slovenska z dôvodu účasti v týchto súťažiach alebo účasti v medzinárodných súťažiach organizovaných športovou federáciou na základe účasti v týchto súťažiach a viem sa o tom preukázať.",
                  "ehranica"
                ),
              }}
            />
            <RadioInputField
              name="exceptionSport"
              value="33"
              dangerouslySetInnerHTML={{
                __html: __(
                  "Zúčasťňujem sa športových súťaží: <strong>TIPOS extraliga</strong> (hokej - muži), <strong>FORTUNA Liga</strong> (futbal-muži), <strong>SLOVNAFT Handball Extraliga</strong> (hádzaná-muži), <strong>Extraliga</strong> muži (volejbal), <strong>Extraliga</strong> ženy (volejbal), <strong>Slovenská basketbalová liga</strong> (muži), <strong>Extraliga</strong> ženy (basketbal) alebo <strong>MOL Liga</strong> (hádzaná – ženy) a prekračujem hranice Slovenska z dôvodu účasti v medzinárodných súťažiach organizovaných športovou federáciou na základe účasti v týchto súťažiach a viem sa o tom preukázať.",
                  "ehranica"
                ),
              }}
            />
          </div>
        </div>
      </Fieldset>
    </div>
  );
}

export default Sport;
