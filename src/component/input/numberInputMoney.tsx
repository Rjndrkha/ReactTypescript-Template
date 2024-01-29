import React, { useEffect, useState } from "react";
import { InputNumber } from "antd";

interface NumberInputProps {
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  isSubmit?: boolean;
  maxLength?: number;
}

const NumberInputMoney: React.FC<NumberInputProps> = ({
  placeholder,
  min,
  max,
  maxLength,
  defaultValue,
  value,
  onChange = () => {},
  disabled,
  readOnly,
  required,
  isSubmit,
}) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isSubmit) {
      if (!value) {
        return setError(true);
      } else {
        return setError(false);
      }
    }
  }, [value, isSubmit]);
  return (
    <>
      <InputNumber
        addonBefore={"RP"}
        placeholder={placeholder}
        min={min}
        max={max}
        maxLength={maxLength}
        defaultValue={defaultValue}
        onChange={(e) => onChange(Number(e))}
        value={value}
        status={error ? "error" : ""}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        style={
          readOnly
            ? { width: "100%", height: "auto", backgroundColor: "#F1F1F1" }
            : { width: "100%", height: "auto" }
        }
      />
      {error && (
        <p className="text-xs text-red-500 italic font-semibold">
          Please Fill This Field!
        </p>
      )}
    </>
  );
};

export default NumberInputMoney;
