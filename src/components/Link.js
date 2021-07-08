import React from "react";
import PropTypes from "prop-types";

function Link(props) {
  function onClick(event) {
    event.preventDefault();
    props.onClick();
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="govuk-link" href="#" onClick={onClick} style={props.style}>
      {props.children}
    </a>
  );
}

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Link;
