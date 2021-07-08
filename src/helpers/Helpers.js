import moment from "moment";
import { __ } from "@wordpress/i18n";

export function formatDate(date) {
  return moment({
    year: parseInt(date.year),
    month: parseInt(date.month) - 1,
    day: parseInt(date.day),
  }).format("YYYY-MM-DD");
}

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
