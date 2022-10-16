import React from "react";
import { createField, FieldType } from "@altiore/form";
import styles from "./Fields.module.css";

const Field = ({
  fieldProps,
  inputProps,
  label,
  autoComplete,
  placeholder,
  Element,
}) => {
  return (
    <div>
      <div>
        <label>{label}</label>
        {Element ? (<Element {...inputProps} autoComplete={autoComplete} placeholder={placeholder} />) 
                 : (<input {...inputProps} autoComplete={autoComplete} placeholder={placeholder} /> )}
      </div>
      <span className={styles.error}>{fieldProps.error}</span>
    </div>
  );
};

const FieldTA = ({ fieldProps, inputProps, label }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea {...inputProps} />
      <span>{fieldProps.error}</span>
    </div>
  );
};

const CheckBox = ({ inputProps, label, text, className }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} />
      <span>{text}</span>
    </div>
  );
};

const Fields = {
  Number: createField(FieldType.NUMBER, Field),
  Text: createField(FieldType.TEXT, Field),
  Email: createField(FieldType.EMAIL, Field),
  Pass: createField(FieldType.PASSWORD, Field),
  Phone: createField(FieldType.PHONE, Field),
  Textarea: createField(FieldType.TEXTAREA, FieldTA),
  CheckBox: createField(FieldType.BOOLEAN, CheckBox),
  Data: createField(FieldType.DATA, Field),
};

export default Fields;

/* const Input = (props)=> { 
  const {fieldProps, inputProps, label, autoComplete, placeholder, ...restProps} = props;
  return <Field {...props}>
            <StyledInput {...inputProps} autoComplete={autoComplete} placeholder={placeholder} {...restProps}/>
        </Field>}  */
