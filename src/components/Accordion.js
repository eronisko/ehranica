import React, { useRef, useEffect } from "react";

function Group(props) {
  const accordion = useRef();

  useEffect(() => {
    new window.GOVUKFrontend.Accordion(accordion.current).init();
  });

  return (
    <div ref={accordion} class="govuk-accordion" data-module="govuk-accordion">
      {props.children}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div class="govuk-accordion__section ">
      <div class="govuk-accordion__section-header">
        <h2 class="govuk-accordion__section-heading">
          <span
            class="govuk-accordion__section-button"
            // id="accordion-default-heading-2"
          >
            {title}
          </span>
        </h2>
      </div>
      <div
        id="accordion-default-content-2"
        class="govuk-accordion__section-content"
        // aria-labelledby="accordion-default-heading-2"
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
