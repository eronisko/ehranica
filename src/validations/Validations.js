import moment from "moment";

function hasValidSlovakIdDateParts(rc) {
  return validSlovakIdDateParts(rc).length === 3;
}

function isValidSlovakId(value) {
  if (!value) {
    return false;
  }

  if (!value.match(/^[0-9]{9,10}$/)) {
    return false;
  }

  if (value.length === 10) {
    // BIC
    if (value[2] === "7") {
      return parseInt(value) % 11 === 0;
    }

    // 10 miestne rodne cislo
    return parseInt(value) % 11 === 0 && hasValidSlovakIdDateParts(value);
  }

  // 9 miestne rodne cislo
  if (value.length === 9) {
    return hasValidSlovakIdDateParts(value);
  }

  return false;
}

function validSlovakIdDateParts(rc) {
  if (rc[2] === "7") {
    return [];
  }

  var year = parseInt(rc.substring(0, 2));
  var month = parseInt(rc.substring(2, 4)) % 50;
  var day = parseInt(rc.substring(4, 6));
  var century;

  if (rc.length === 10) {
    if (year < 54) {
      century = 2000;
    } else {
      century = 1900;
    }
  }

  if (rc.length === 9) {
    if (year < 54) {
      century = 1900;
    } else {
      return [];
    }
  }

  year += century;

  var maxNumberOfDays = new Date(year, month, 0).getDate();

  if (month === 0 || month > 12) {
    return [];
  }

  if (day === 0 || day > maxNumberOfDays) {
    return [];
  }

  return [day, month, year];
}

export function birthNumberToDate(birthNumber) {
  if (isValidSlovakId(birthNumber)) {
    return validSlovakIdDateParts(birthNumber);
  }

  return [];
}

export function validZip(errorMessage) {
  return this.test(`test-valid-zip`, errorMessage, function (value) {
    const { path, createError } = this;

    if (value) {
      value = value.replace(/[^0-9]/g, "");
    }

    return (
      (value && value.match(/^[0-9]{5}$/)) ||
      createError({ path, message: errorMessage })
    );
  });
}

export function slovakId(errorMessage) {
  return this.test(`test-valid-slovak-id`, errorMessage, function (value) {
    const { path, createError } = this;
    return (
      isValidSlovakId(value) || createError({ path, message: errorMessage })
    );
  });
}

export function allowedPhoneNumber(errorMessage) {
  return this.test(`test-allowed-phone-number`, errorMessage, function (value) {
    const { path, createError } = this;
    return (
      (value && /^(\+|00)\d{8}\d*$/.test(value.replace(/[ \-\(\)]/g, ""))) ||
      createError({ path, message: errorMessage })
    );
  });
}

export function validArrivalDate(errorMessage) {
  return this.test(`test-valid-arrival-date`, errorMessage, function (value) {
    const { path, createError } = this;

    const day = parseInt(value.day);
    const month = parseInt(value.month);
    const year = parseInt(value.year);

    let hasError =
      isNaN(day) ||
      day < 1 ||
      day > 31 ||
      isNaN(month) ||
      month < 1 ||
      month > 12 ||
      isNaN(year) ||
      year < 1900 ||
      year > 2030;

    if (!hasError) {
      const now = moment();
      const arrivalDate = moment({
        year: year,
        month: month - 1,
        day: day,
      });

      const diff = Math.round(arrivalDate.diff(now, "days", true) || 100);

      hasError |= diff < -14 || diff > 30;
    }

    return !hasError || createError({ path, message: errorMessage });
  });
}

export function validDate(errorMessage) {
  return this.test(`test-valid-date`, errorMessage, function (value) {
    const { path, createError } = this;

    const day = parseInt(value.day);
    const month = parseInt(value.month);
    const year = parseInt(value.year);

    const hasError =
      isNaN(day) ||
      day < 1 ||
      day > 31 ||
      isNaN(month) ||
      month < 1 ||
      month > 12 ||
      isNaN(year) ||
      year < 1900 ||
      year > 2030;

    return !hasError || createError({ path, message: errorMessage });
  });
}
