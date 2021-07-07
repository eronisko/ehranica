import { useEffect } from "react";
import "./App.css";
import { Wizard, Steps, Step } from "react-albus";
import { Formik, Form } from "formik";
import { __ } from "@wordpress/i18n";

import StartStep from "steps/Start";
import Step2Step from "steps/Step2";
import Step3Step from "steps/Step3";

function onSubmit(values, wizard) {
  const { step, push } = wizard;

  if (step.id === "StartStep") push("Step2");
  if (step.id === "Step2") push("Step3");
}

// Partial validation schemas for each step
const validationSchemas = {
  StartStep: StartStep.validationSchema,
  Step2Step: Step2Step.validationSchema,
};

// Initial values combined from each step
let initialValues = {
  ...StartStep.initialValues,
  ...Step2Step.initialValues,
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
          {__('Registrácia pri príchode zo zahraničia', 'ehranica')}
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
                  {/*<Step id="StartStep" render={() => <StartStep />} />*/}
                  <Step id="Step2" render={() => <Step2Step />} />
                  <Step id="Step3" render={() => <Step3Step />} />
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
