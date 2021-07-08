import "./App.css";
import { Wizard, Steps, Step } from "react-albus";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Formik, Form } from "formik";
import {useTranslation} from "react-i18next";

import StartStep from "steps/Start";
import AgeDependentStep from "steps/AgeDependent";
import ExceptionStep from "steps/Exception";
import YoungerThan12Step from "steps/YoungerThan12";
import { age } from "helpers/Helpers";
import QuarantineRegistrationStep from "steps/QuarantineRegistration";
import ConsentsStep from "steps/Consents";
import ThankYouTemporaryStep from "steps/ThankYouTemporary";

import StepFinalStep from "steps/StepFinal";

function onSubmit(values, wizard) {
  const { step, push } = wizard;

  values.age = age(values.birthDate, values.arrivalDate);
  values.isAdult = values.age >= 18;

  if (step.id === "StartStep") {
    if (values.age < 12) {
      push("YoungerThan12Step");
    } else {
      push("AgeDependentStep");
    }
  }

  if (step.id === "AgeDependentStep") {
    if (values.exceptionId > 0) {
      push("Consents");
    } else {
      push("ExceptionStep");
    }
  }

  if (step.id === "ExceptionStep") {
    if (values.exceptionId > 0) {
      push("Consents");
    } else {
      push("QuarantineRegistration");
    }
  }

  if (step.id === "Consents" || step.id === "QuarantineRegistration") {
    push("StepFinal");
  }

  if (step.id === "StepFinal") {
    push("StartStep");
  }
}

// Partial validation schemas for each step
const validationSchemas = {
  StartStep: StartStep.validationSchema,
  AgeDependentStep: AgeDependentStep.validationSchema,
  QuarantineRegistration: QuarantineRegistrationStep.validationSchema,
  Consents: ConsentsStep.validationSchema,
};

// Initial values combined from each step
let initialValues = {
  ...StartStep.initialValues,
  ...AgeDependentStep.initialValues,
  ...QuarantineRegistrationStep.initialValues,
  ...ConsentsStep.initialValues,
  ...ExceptionStep.initialValues,
};

function App() {
  const {t, i18n} = useTranslation('common');
  return (
    <Router>
      <Route>
        <Wizard
          render={(wizard) => (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchemas[wizard.step.id]}
              onSubmit={(values) => onSubmit(values, wizard)}
            >
              {({ values }) => (
                <Form>
                  <div
                    style={{
                      position: "fixed",
                      fontSize: "20px",
                      backgroundColor: "yellow",
                      zIndex: 1000,
                      top: 0,
                      right: 0,
                      padding: "5px",
                    }}
                  >
                    ID vynimky:{" "}
                    {values.exceptionId
                      ? values.exceptionId < 0
                        ? t("home.exceptionNone")
                        : values.exceptionId
                      : t("home.exceptionNotSelected")}
                  </div>
                  <Steps>
                    <Step id="StartStep" render={() => <StartStep />} />
                    <Step
                      id="AgeDependentStep"
                      render={() => <AgeDependentStep />}
                    />
                    <Step id="ExceptionStep" render={() => <ExceptionStep />} />
                    <Step
                      id="YoungerThan12Step"
                      render={() => <YoungerThan12Step />}
                    />
                    <Step
                      id="QuarantineRegistration"
                      render={() => <QuarantineRegistrationStep />}
                    />
                    <Step id="Consents" render={() => <ConsentsStep />} />
                    <Step
                      id="ThankYouTemporary"
                      render={() => <ThankYouTemporaryStep />}
                    />
                    <Step id="StepFinal" render={() => <StepFinalStep />} />
                  </Steps>
                </Form>
              )}
            </Formik>
          )}
        />
      </Route>
    </Router>
  );
}

export default App;
