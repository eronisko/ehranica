import "./App.css";
import { Wizard, Steps, Step } from "react-albus";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";

import StartStep from "steps/Start";
import AgeDependentStep from "steps/AgeDependent";
import ExceptionStep from "steps/Exception";
import YoungerThan12Step from "steps/YoungerThan12";
import { age } from "helpers/Helpers";
import QuarantineRegistrationStep from "steps/QuarantineRegistration";
import ConsentsStep from "steps/Consents";

import StepFinalStep from "steps/StepFinal";
import ExplanationStep from "steps/Explanation";
import "styles/app.css";

function onSubmit(values, wizard, setTouched) {
  const { step, push } = wizard;

  // Un-touch fields to re-set validations for the next step
  setTouched({});

  if (step.id === "ExplanationStep") {
    push("StartStep");
  }

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
      if (values.isAdult) {
        push("ExceptionStep");
      } else {
        push("QuarantineRegistration");
      }
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

function App({ isTest }) {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="app-holder">
      {isTest && (
        <div>
          Testovací mód
          <br />
          <br />
        </div>
      )}

      <Router>
        <Route>
          <Wizard
            render={(wizard) => (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas[wizard.step.id]}
                onSubmit={(values, { setTouched }) =>
                  onSubmit(values, wizard, setTouched)
                }
              >
                {({ values }) => (
                  <Form>
                    {isTest && (
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
                        <div
                          style={{
                            fontSize: "12px",
                            lineHeight: "14px",
                            textAlign: "center",
                          }}
                        >
                          Toto sa zobrazuje len
                          <br />v testovacom mode. ;)
                        </div>
                      </div>
                    )}
                    <Steps>
                      {/*<Step*/}
                      {/*  id="ExplanationStep"*/}
                      {/*  render={() => <ExplanationStep />}*/}
                      {/*/>*/}
                      <Step id="StartStep" render={() => <StartStep />} />
                      <Step
                        id="AgeDependentStep"
                        render={() => <AgeDependentStep />}
                      />
                      <Step
                        id="ExceptionStep"
                        render={() => <ExceptionStep />}
                      />
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
                        id="StepFinal"
                        render={() => <StepFinalStep isTest={isTest} />}
                      />
                    </Steps>
                  </Form>
                )}
              </Formik>
            )}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
