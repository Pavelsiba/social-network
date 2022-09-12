import React from "react";
import { createField, FieldType  } from "@altiore/form";

const Field = ({ fieldProps, inputProps, label, autoComplete }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} autoComplete={autoComplete} />
      <span>{fieldProps.error}</span>
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

const Fields = {
    Number: createField(FieldType.NUMBER, Field),
    Email: createField(FieldType.EMAIL, Field),
    Pass: createField(FieldType.PASSWORD, Field),
    Textarea: createField(FieldType.TEXTAREA, FieldTA),
  };

export default Fields;

