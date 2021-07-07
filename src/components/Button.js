import React from "react";
import PropTypes from "prop-types";
import { __ } from "@wordpress/i18n";

function Button({ label, onClick }) {
  return (
    <button
      className="govuk-button js-uc-submit govuk-button--start"
      type="submit"
    >
      <span>{label || __('Pokračovať', 'ehranica')}</span>
      <svg
        className="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
      </svg>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
