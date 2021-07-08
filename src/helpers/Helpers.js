import moment from "moment";
import { __ } from "@wordpress/i18n";

export function age(birthDate, onDate) {
  var dateOfBirth = moment({
    year: parseInt(birthDate.year),
    month: parseInt(birthDate.month) - 1,
    day: parseInt(birthDate.day),
  });

  var on = moment({
    year: parseInt(onDate.year),
    month: parseInt(onDate.month) - 1,
    day: parseInt(onDate.day),
  });

  return Math.round(on.diff(dateOfBirth, "years", true) || 100);
}

export function thankYouMessage(value) {
  console.log('code', value);
  let message;

  switch (value) {
    case 1:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Nemusíte sa preukazovať negatívnym RT-PCR alebo antigénovým testom.",
        "ehranica"
      )
      break;

    case 2:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí 6 mesiacov. Najbližší polrok sa teda pri prekračovaní hraníc nemusíte opätovne registrovať. Budete však vždy potrebovať potvrdenie o očkovaní alebo Digitálny COVID preukaz EÚ.",
        "ehranica"
      )
      break;

    case 3:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí do 9.8.2021. Ak budete do tohto dátumu prekračovať hranice, nemusíte sa opätovne registrovať. Budete však vždy potrebovať potvrdenie o očkovaní alebo Digitálny COVID preukaz EÚ.",
        "ehranica"
      )
      break;

    case 4:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 5:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 6:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 7:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 8:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Táto registrácia platí 1 týždeň odo dnešného dňa. Ak by ste počas nasledujúceho týždňa prekračovali hranice, nemusíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 9:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 10:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 11:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 12:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 13:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 14:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 15:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Táto registrácia platí 1 týždeň odo dnešného dňa. Ak by ste počas nasledujúceho týždňa prekračovali hranice, nemusíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 16:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Vždy, keď budete prekračovať hranice, musíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 17:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať, ani sa nemusíte preukázať negatívnym výsledkom RT-PCR alebo antigénového testu. Táto registrácia platí 1 týždeň odo dnešného dňa. Ak by ste počas nasledujúceho týždňa prekračovali hranice, nemusíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 18:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí do 1.9.2021. Ak budete do tohto dátumu prekračovať hranice, nemusíte sa opätovne registrovať. Na hraniciach sa však vždy musíte preukázať negatívnym RT-PCR testom nie starším ako 1 týždeň. ",
        "ehranica"
      )
      break;

    case 19:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí do 1.9.2021. Ak budete do tohto dátumu prekračovať hranice, nemusíte sa opätovne registrovať. Na hraniciach sa však vždy musíte preukázať negatívnym RT-PCR testom nie starším ako 1 týždeň. ",
        "ehranica"
      )
      break;

    case 20:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí do 1.9.2021. Ak budete do tohto dátumu prekračovať hranice, nemusíte sa opätovne registrovať. Na hraniciach sa však vždy musíte preukázať negatívnym RT-PCR testom nie starším ako 1 týždeň. ",
        "ehranica"
      )
      break;
  
    case 21:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí 1 mesiac od dnešného dňa. Na hraniciach sa však vždy musíte preukázať negatívnym antigénovým alebo RT-PCR testom nie starším ako 1 týždeň. Ak budete počas nasledujúceho mesiaca prekračovať hranice, nemusíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 22:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí 1 mesiac od dnešného dňa. Na hraniciach sa však vždy musíte preukázať negatívnym antigénovým alebo RT-PCR testom nie starším ako 1 týždeň. Ak budete počas nasledujúceho mesiaca prekračovať hranice, nemusíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 23:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí 1 mesiac od dnešného dňa. Na hraniciach sa však vždy musíte preukázať negatívnym antigénovým alebo RT-PCR testom nie starším ako 1 týždeň. Ak budete počas nasledujúceho mesiaca prekračovať hranice, nemusíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 24:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí 1 mesiac od dnešného dňa. Na hraniciach sa však vždy musíte preukázať negatívnym antigénovým alebo RT-PCR testom nie starším ako 1 týždeň. Ak budete počas nasledujúceho mesiaca prekračovať hranice, nemusíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 25:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí 1 mesiac od dnešného dňa. Na hraniciach sa však vždy musíte preukázať negatívnym antigénovým alebo RT-PCR testom nie starším ako 1 týždeň. Ak budete počas nasledujúceho mesiaca prekračovať hranice, nemusíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 26:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Táto registrácia platí 1 mesiac od dnešného dňa. Na hraniciach sa však vždy musíte preukázať negatívnym antigénovým alebo RT-PCR testom nie starším ako 1 týždeň. Ak budete počas nasledujúceho mesiaca prekračovať hranice, nemusíte sa opätovne registrovať. ",
        "ehranica"
      )
      break;

    case 27:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však vždy musíte preukázať negatívnym RT-PCR testom nie starším ako 1 týždeň. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 28:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však vždy musíte preukázať negatívnym RT-PCR testom nie starším ako 1 týždeň. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 29:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však vždy musíte preukázať negatívnym RT-PCR testom nie starším ako 1 týždeň. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 30:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však vždy musíte preukázať negatívnym RT-PCR testom nie starším ako 1 týždeň. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 31:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 32:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 33:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 34:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 35:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 36:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 37:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 38:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 39:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 40:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 41:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 42:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 43:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 44:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 45:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 46:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 47:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 48:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 49:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;

    case 50:
      message = __(
        "Ďakujeme, že ste sa zaregistrovali do eHranice. Spĺňate podmienku výnimky zo 14-dňovej karantény, nemusíte ju absolvovať. Na hraniciach sa však musíte vždy preukázať negatívnym RT-PCR testom nie starším ako 72 hodín. Ak budete znovu prekračovať hranice, musíte sa opätovne registrovať.",
        "ehranica"
      )
      break;
  
    case 51:
      message = __(
        "",
        "ehranica"
      )
      break;

    case 52:
      message = __(
        "",
        "ehranica"
      )
      break;
    
    default:
      message = __(
        "",
        "ehranica"
      )
      break;
  }

  return message;
}
