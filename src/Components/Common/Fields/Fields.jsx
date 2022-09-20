import React from "react";
import { createField, FieldType  } from "@altiore/form";
import styles from './Fields.module.css'

const Field = ({ fieldProps, inputProps, label, autoComplete, placeholder}) => {

  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} autoComplete={autoComplete} placeholder={placeholder}/>
      <span className={styles.formsControl}>{fieldProps.error}</span>
    </div>
  );
};

const FieldTA = ({ fieldProps, inputProps, label}) => {
 return (
      <div>
        <label>{label}</label>
        <textarea {...inputProps} />
        <span>{fieldProps.error}</span>
      </div>
    );
  };

const CheckBox = ({inputProps, label}) => {
    return (
      <div>
        <label>{label}</label>
        <input {...inputProps} />
      </div>
    );
  };

const Fields = {
    Number: createField(FieldType.NUMBER, Field),
    Email: createField(FieldType.EMAIL, Field),
    Pass: createField(FieldType.PASSWORD, Field),
    Textarea: createField(FieldType.TEXTAREA, FieldTA),
    CheckBox: createField(FieldType.BOOLEAN, CheckBox),
  };

export default Fields;


