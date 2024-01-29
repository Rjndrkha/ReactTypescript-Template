import React from "react";
import { Button } from "antd";

interface ButtonDefaultProps {
  text: any;
  htmlType?: any;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  color?: string;
  isClick?: boolean;
  width?: string;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  htmlType,
  text,
  onClick,
  disabled,
  className,
  color,
  width,
}) => {
  return (
    <>
      <Button
        htmlType={htmlType}
        style={{
          backgroundColor: disabled ? "#F1F1F1" : color ? color : "#FF7A45",
          color: "#FFFFFF",
          width: width,
        }}
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};
export default ButtonDefault;
