import React from "react";
import { useQuery } from "react-query";
import { userServices } from "service";
import { BreadCrumb, PageTitle, SaujiLayout, SaujiTable } from "ui";
import { profile } from "../../assets/profile_picture.png";

const UserProfile = () => {
  const { data: users } = useQuery(["users"], () => userServices.getUserData());

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Profile Picture",
      dataIndex: "profilePicture",
      key: "profilePicture",
      render: (text, record) => (
        <img
          src={record.profilePicture}
          alt="Profile"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      ),
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
      profilePicture: item?.profilePicture ?? profile,
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
