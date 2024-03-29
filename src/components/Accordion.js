import React, { useRef, useEffect } from "react";
import uuid from "react-uuid";

function Group(props) {
  const accordion = useRef();

  useEffect(() => {
    new window.GOVUKFrontend.Accordion(accordion.current).init();
  }, []);

  return (
    <div
      ref={accordion}
      className="govuk-accordion"
      data-module="govuk-accordion"
    >
      {props.children}
    </div>
  );
}

function Section({ title, children }) {
  const id = useRef(uuid());

  return (
    <div className="govuk-accordion__section ">
      <div className="govuk-accordion__section-header">
        <h2 className="govuk-accordion__section-heading">
          <span className="govuk-accordion__section-button" id={id.current}>
            {title}
          </span>
        </h2>
      </div>
      <div
        id="accordion-default-content-2"
        className="govuk-accordion__section-content"
        aria-labelledby={id.current}
      >
        {children}
      </div>
    </div>
  );
}

const Accordion = {
  Group,
  Section,
};

export default Accordion;
