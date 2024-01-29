import React, { useEffect, useState } from "react";
import { Input } from "antd";

interface TextInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoCapitalize?: string;
  isSubmit?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  value,
  onChange = () => {},
  disabled,
  readOnly,
  required,
  autoFocus,
  autoCapitalize,
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

  if (type === "password") {
    return (
      <>
        <Input.Password
          placeholder="input password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
          required={required}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          disabled={disabled}
          status={error ? "error" : ""}
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
  }

  return (
    <>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        required={required}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        disabled={disabled}
        status={error ? "error" : ""}
        style={
          readOnly
            ? { width: "100%", height: "auto", backgroundColor: "#F1F1F1" }
            : { width: "100%", height: "auto" }
        }
        onFocus={() => setError(false)}
      />
      {error && (
        <p className="text-xs text-red-500 italic font-semibold">
          Please Fill This Field!
        </p>
      )}
    </>
  );
};

export default TextInput;
