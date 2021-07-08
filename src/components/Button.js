import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Button({ label, disabled, display, onClick }) {
  const {t} = useTranslation('common');
  disabled = disabled || false;
  return (
    <button
      className={`govuk-button js-uc-submit ${
        display === "secondary" ? "govuk-button--secondary" : "govuk-button--start"
      }
      ${
        disabled ? "govuk-button govuk-button--disabled" : ""
      } `}
      type="submit"
      disabled={disabled}
      aria-disabled={disabled}
      // onClick={onClick}
      data-module="govuk-button"
    >
      <span>{label || t("component.button.continue")}</span>
      {display !== "secondary" && <svg
        className="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
      </svg>}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
