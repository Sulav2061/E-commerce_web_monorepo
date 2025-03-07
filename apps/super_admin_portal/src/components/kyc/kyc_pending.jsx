import React from "react";
import { useQuery } from "react-query";
import { Tag } from "antd";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { BreadCrumb, PageTitle, SaujiLayout, SaujiTable } from "ui";
import { kycServices } from "service";

const KYCPending = () => {
  const navigate = useNavigate();
  const { data: kycDetail } = useQuery(["kycDetail"], () =>
    kycServices.getAdminVerifyForm()
  );

  const pendingData = kycDetail?.filter((data) => data.status === "Pending");

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
              color: "orange",
              border: "1px Solid orange",
            }}
          >
            {status}
          </Tag>
        </>
      ),
    },
    {
      title: "Verify",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        console.log({ record });
        return (
          <>
            <LuEye
              size={30}
              color="orange"
              onClick={() => {
                navigate(`/kyc/pending/${record.id}`, {
                  state: record,
                });
              }}
            />
          </>
        );
      },
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
      bType: item?.businessType,
      bDetails: item?.businessDetails,
      bankName: item?.bankName,
      accNum: item?.accountNumber,
      panNum: item?.panNumber,
      status: item?.status,
      userId: item?.userId,
    };
  });

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <PageTitle title="KYC" />
      <BreadCrumb items={["KYC", "Pending"]} />
      <SaujiLayout>
        <SaujiTable columns={columns} data={tableData} scroll={800} />
      </SaujiLayout>
    </div>
  );
};

export default KYCPending;
