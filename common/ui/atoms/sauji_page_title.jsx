import { Typography } from "antd";
import React from "react";

export const PageTitle = ({ title }) => {
  return (
    <Typography.Text
      style={{
        fontSize: "24px",
        paddingBottom: "24px",
      }}
    >
      {title}
      <br />
    </Typography.Text>
  );
};
