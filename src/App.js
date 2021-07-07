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
let initialValues = {
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
              <Form>
                <Steps>
                  <Step id="StartStep" render={() => <StartStep />} />
                  <Step id="step_2" render={() => <Step2Step />} />
                </Steps>
              </Form>
            </Formik>
          )}
        />
      </div>
    </main>
  );
}

export default App;
