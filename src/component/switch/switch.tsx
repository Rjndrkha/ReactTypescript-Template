import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";

interface SwitchComponentProps {
  checked?: boolean;
  onChange?: () => void;
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({
  checked,
  onChange,
}) => (
  <>
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked={checked}
      onChange={onChange}
    />
  </>
);

export default SwitchComponent;
