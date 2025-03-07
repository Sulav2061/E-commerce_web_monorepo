import React from "react";
import { useQuery } from "react-query";
import { userServices } from "service";
import { BreadCrumb, PageTitle, SaujiLayout, SaujiTable } from "ui";

const UserProfile = () => {
  const { data: users } = useQuery(["users"], () => userServices.getUserData());

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  const tableData = users?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      phone: item?.phone,
      email: item?.email,
      role: item?.roles?.[0],
    };
  });
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <PageTitle title="Users" />
      <BreadCrumb items={["Users", "Details"]} />
      <SaujiLayout>
        <SaujiTable columns={columns} data={tableData} scroll={800} />
      </SaujiLayout>
    </div>
  );
};

export default UserProfile;
