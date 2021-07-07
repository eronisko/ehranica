import React from "react";

import { ErrorMessage, Field, useFormikContext } from "formik";

function InputField(props) {
    const { errors, touched } = useFormikContext();

    function errorClassName(name, className) {
        return errors[name] && touched[name] ? className : '';
    }

    return (
        <div className={`govuk-form-group govuk-!-margin-bottom-3 ${errorClassName(props.name, 'govuk-form-group--error')}`}>
            <label className="govuk-label" htmlFor={props.name}>
                <strong>{props.label}</strong>
            </label>
            <div className="govuk-hint">{props.hint}</div>
            <ErrorMessage name={props.name}>
                {(msg) => <span className="govuk-error-message">{msg}</span>}
            </ErrorMessage>
            <Field
                id={props.name}
                name={props.name}
                type={props.type || "text"}
                className={`govuk-input govuk-input--width-20 ${errorClassName(props.name, 'govuk-input--error')}`}
            />
        </div>
    );
}

export default InputField;
