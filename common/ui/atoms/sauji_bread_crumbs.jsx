import { RightOutlined } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";

export const BreadCrumb = ({ items }) => {
  return (
    <Space>
      {items?.map((item, index) => (
        <React.Fragment key={index}>
          <span
            style={{
              color: index === items.length - 1 ? "#000" : "#8C8C8C",
            }}
          >
            {item}
          </span>
          {index < items.length - 1 && (
            <RightOutlined style={{ color: "#8C8C8C" }} />
          )}
        </React.Fragment>
      ))}
    </Space>
  );
};
