import React from "react";
import {ErrorMessage, Field, useFormikContext} from "formik";
import { __ } from "@wordpress/i18n";

function Date(props) {
    const { errors, touched } = useFormikContext();

    function errorClassName(name, className) {
        return errors[name] && touched[name] ? className : '';
    }

  return (
      <div className={`govuk-form-group ${errorClassName(props.name, 'govuk-form-group--error')}`}>
        {props.label && <label className="govuk-label" htmlFor={props.name + '-day'} >
              <strong>{props.label}</strong>
          </label>}
          <span className="govuk-hint">{__('Mesiac zadávajte ako číslo od 1 do 12.', 'ehranica')}</span>
          <ErrorMessage name={props.name}>
              {(msg) => <span className="govuk-error-message">{msg}</span>}
          </ErrorMessage>
          <div className="govuk-date-input">
              <div className="govuk-date-input__item">
                  <div className="govuk-form-group">
                      <label className="govuk-label govuk-date-input__label" htmlFor={props.name + 'day'}>
                          {__('Deň', 'ehranica')}
                      </label>
                      <Field
                          name={props.name + '.day'}
                      >
                          {({ field, form, meta }) => (
                              <input
                                  id={props.name + 'day'}
                                  type="text" {...field}
                                  inputMode="numeric"
                                  pattern="[0-9]*"
                                  className="govuk-input govuk-date-input__input govuk-input--width-2" />
                          )}
                      </Field>
                  </div>
              </div>
              <div className="govuk-date-input__item">
                  <div className="govuk-form-group">
                      <label className="govuk-label govuk-date-input__label" htmlFor={props.name + 'month'}>
                          {__('Mesiac', 'ehranica')}
                      </label>
                      <Field
                          name={props.name + '.month'}
                      >
                          {({ field, form, meta }) => (
                              <input
                                  id={props.name + 'month'}
                                  type="text" {...field}
                                  inputMode="numeric"
                                  pattern="[0-9]*"
                                  className="govuk-input govuk-date-input__input govuk-input--width-2" />
                          )}
                      </Field>
                  </div>
              </div>
              <div className="govuk-date-input__item">
                  <div className="govuk-form-group">
                      <label className="govuk-label govuk-date-input__label" htmlFor={props.name + 'year'}>
                          {__('Rok', 'ehranica')}
                      </label>
                      <Field
                          name={props.name + '.year'}
                      >
                          {({ field, form, meta }) => (
                              <input
                                  id={props.name + 'year'}
                                  type="text" {...field}
                                  inputMode="numeric"
                                  pattern="[0-9]*"
                                  className="govuk-input govuk-date-input__input govuk-input--width-4" />
                          )}
                      </Field>

                  </div>
              </div>
          </div>
      </div>
  );
}

export default Date;
