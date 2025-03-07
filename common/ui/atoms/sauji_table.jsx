import React from "react";
import { Table } from "antd";

export const SaujiTable = ({ columns, data, scroll, rowSelection }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowSelection={rowSelection}
      scroll={{ x: scroll?.toString() }}
      pagination={false}
    />
  );
};
