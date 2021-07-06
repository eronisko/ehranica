import { useEffect } from "react";
import "./App.css";
import { Wizard, Steps, Step } from "react-albus";
import { Formik, Form } from "formik";

import StartStep from "steps/Start";
import Step2Step from "steps/Step2";

function onSubmit(values, wizard) {
  const { step, push } = wizard;

  if (step.id === "StartStep") push("step_2");
}

// Partial validation schemas for each step
const validationSchemas = {
  StartStep: StartStep.validationSchema,
};

// Initial values combined from each step
const initialValues = {
  ...StartStep.initialValues,
};

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
        <h1 className="govuk-heading-xl govuk-!-margin-bottom-6">
          Registrácia pri príchode zo zahraničia
        </h1>
        <Wizard
          render={(wizard) => (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchemas[wizard.step.id]}
              onSubmit={(values) => onSubmit(values, wizard)}
            >
              {({ values }) => (
                <Form>
                  <Steps>
                    <Step
                      id="StartStep"
                      render={(stepProps) => <StartStep {...stepProps} />}
                    />
                    <Step
                      id="step_2"
                      render={(stepProps) => <Step2Step {...stepProps} />}
                    />
                  </Steps>
                  <span>{values.name}</span>
                </Form>
              )}
            </Formik>
          )}
        ></Wizard>

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
