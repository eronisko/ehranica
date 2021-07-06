import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.GOVUKFrontend.initAll();
  });

  return (
    <main
      className="govuk-main-wrapper govuk-!-padding-top-6 govuk-!-padding-bottom-6 govuk-body"
      id="main-content"
      role="main"
    >
      <div className="govuk-width-container">
        <div
          className="govuk-accordion myClass"
          data-module="govuk-accordion"
          id="default-example"
          data-attribute="value"
        >
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <span
                  className="govuk-accordion__section-button"
                  id="default-example-heading-1"
                >
                  Section A
                </span>
              </h2>
            </div>
            <div
              id="default-example-content-1"
              className="govuk-accordion__section-content"
              aria-labelledby="default-example-heading-1"
            >
              <ul className="govuk-list govuk-list--bullet">
                <li>Example item 1</li>
              </ul>
            </div>
          </div>
          <div className="govuk-accordion__section ">
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <span
                  className="govuk-accordion__section-button"
                  id="default-example-heading-2"
                >
                  Section B
                </span>
              </h2>
            </div>
            <div
              id="default-example-content-2"
              className="govuk-accordion__section-content"
              aria-labelledby="default-example-heading-2"
            >
              <ul className="govuk-list govuk-list--bullet">
                <li>Example item 2</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="govuk-form-group govuk-!-margin-bottom-1">
          <label className="govuk-label">
            <strong>Identifikačné číslo</strong>
          </label>
          <span
            id="uc-id-1-error"
            className="govuk-error-message"
            style={{ display: "none" }}
          >
            Zadajte správne rodné číslo, BIČ alebo ID pridelené inou krajinou.{" "}
          </span>
          <div
            className="govuk-radios govuk-radios--conditional"
            data-module="govuk-radios"
          >
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="uc-id-type-1-slovak"
                name="id-type-1"
                type="radio"
                value="slovak"
                data-aria-controls="id-type-conditional-slovak-1"
                checked
              />
              <label
                className="govuk-label govuk-radios__label"
                htmlFor="uc-id-type-1-slovak"
              >
                Slovenské rodné číslo alebo BIČ{" "}
              </label>
            </div>
            <div
              className="govuk-radios__conditional govuk-radios__conditional--hidden"
              id="id-type-conditional-slovak-1"
            >
              <input
                className="govuk-input govuk-!-width-one-third"
                name="id-slovak-1"
                type="text"
                id="uc-id-slovak-1"
              />
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="uc-id-type-1-foreign"
                name="id-type-1"
                type="radio"
                value="foreign"
                data-aria-controls="id-type-conditional-foreign-1"
              />
              <label
                className="govuk-label govuk-radios__label"
                htmlFor="uc-id-type-1-foreign"
              >
                ID pridelené inou krajinou{" "}
              </label>
            </div>
            <div
              className="govuk-radios__conditional govuk-radios__conditional--hidden"
              id="id-type-conditional-foreign-1"
            >
              <span
                className="govuk-hint govuk-radios__hint"
                style={{ paddingLeft: 0 }}
              >
                Vyplňte iba ak nemáte slovenské rodné číslo alebo BIČ.{" "}
              </span>
              <input
                className="govuk-input govuk-!-width-one-third"
                name="id-foreign-1"
                type="text"
                id="uc-id-foreign-1"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
