import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import axios from "axios";

interface ImageInputProps {
  action?: string;
  listType?: "text" | "picture" | "picture-card";
  maxCount?: number;
  onChange?: (info: any) => void;
  beforeUpload?: (file: any) => boolean;
}
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const ImageInput: React.FC<ImageInputProps> = ({
  action,
  listType,
  maxCount,
  onChange,
  beforeUpload,
}) => {
  const count = maxCount ? maxCount : 1;
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  const handleChange = async (info: any) => {
    console.log(info);
    // const formData = new FormData();

    // if (info) {
    //   formData.append("file", info);
    // }

    // try {
    //   const response = await axios.post("https://image/upload", formData);
    //   return response.data.url;
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));

    setPreviewImage(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <Upload
        action={action}
        listType={listType ? listType : "picture"}
        maxCount={count}
        onChange={handleChange}
        onPreview={handlePreview}
        beforeUpload={() => false}
      >
        <Button icon={<UploadOutlined />}>Upload (Max: {count})</Button>
      </Upload>

      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      )}
    </Space>
  );
};

export default ImageInput;
