import React from "react";

import { InputFieldContainer } from "./styles";

type InputFieldProps = {
  title: string;
  placeholder: string;
  icon: string;
  inputType?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  title,
  placeholder,
  icon,
  inputType,
}) => {
  return (
    <InputFieldContainer>
      <label htmlFor={title}>{title}</label>
      <div id="input-field">
        <img src={icon} alt={title} />
        <input
          type={inputType}
          placeholder={placeholder}
          id={title}
          spellCheck={false}
        />
      </div>
    </InputFieldContainer>
  );
};

export default InputField;
