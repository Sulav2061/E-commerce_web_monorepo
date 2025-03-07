import React from "react";
import { useQuery } from "react-query";
import { Tag } from "antd";
import { kycServices } from "service";
import { BreadCrumb, PageTitle, SaujiLayout, SaujiTable } from "ui";

const KYCApproved = () => {
  const { data: kycDetail } = useQuery(["kycDetail"], () =>
    kycServices.getAdminVerifyForm()
  );

  const pendingData = kycDetail?.filter((data) => data.status === "Approved");

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "E-mail", dataIndex: "email", key: "email" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Nationality", dataIndex: "nationality", key: "nationality" },
    { title: "Business Name", dataIndex: "bName", key: "bName" },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          <Tag
            style={{
              textAlign: "center",
              color: "#4FBF26",
              border: "1px Solid #4FBF26",
            }}
          >
            {status}
          </Tag>
        </>
      ),
    },
  ];
  const tableData = pendingData?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      email: item?.email,
      address: item?.address,
      nationality: item?.nationality,
      citizenshipNum: item?.citizenShipNum,
      bName: item?.businessName,
      status: item?.status,
    };
  });

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <PageTitle title="KYC" />
      <BreadCrumb items={["KYC", "Approved"]} />
      <SaujiLayout>
        <SaujiTable columns={columns} data={tableData} scroll={800} />
      </SaujiLayout>
    </div>
  );
};

export default KYCApproved;
