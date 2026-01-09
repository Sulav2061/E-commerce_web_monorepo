import React from "react";
import { SettingFilled } from "@ant-design/icons";
import {
  BiSolidBell,
  BiSolidDashboard,
  BiSolidUserCheck,
} from "react-icons/bi";
import { Flex, Image, Menu, ConfigProvider, Typography, Space } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCircleUser, FaUsers, FaUserShield } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";
import Logo from "../../assets/main_logo.png";
import { SaujiRoutes } from "../routes/routes";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const onClick = (e) => {
    if (e.key !== "/logo") {
      navigate(e.key);
    }
  };

  const menuItems = [
    {
      key: "/logo",
      label: <Image src={Logo} preview={false} style={{ height: 70 }} />,
      style: {
        textAlign: "center",
        height: 70,
        borderBottom: "1px solid #e0e0e0",
      },
    },
    {
      key: "/",
      icon: <BiSolidDashboard style={{ fontSize: "20px" }} />,
      label: "Dashboard",
    },
    {
      key: "/users",
      icon: <FaUsers style={{ fontSize: "20px" }} />,
      label: "Users",
      children: [{ key: "/users/details", label: "User Details" }],
    },
    {
      key: "/kyc",
      icon: <FaUserShield style={{ fontSize: "20px" }} />,
      label: "KYC",
      children: [
        { key: "/kyc/pending", label: "Pending" },
        { key: "/kyc/approved", label: "Approved" },
        { key: "/kyc/decline", label: "Decline" },
      ],
    },
    {
      key: "/sellers",
      icon: <BiSolidUserCheck style={{ fontSize: "25px" }} />,
      label: "Sellers",
      children: [{ key: "/sellers/details", label: "Sellers Details" }],
    },
    {
      key: "settings",
      icon: <SettingFilled style={{ fontSize: "20px" }} />,
      label: "Settings",
      children: [
        { key: "/setting/profile", label: "Profile" },
        { key: "/logout", label: "Logout" },
      ],
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8E6CEF",
        },
        components: {
          Menu: {
            itemSelectedBg: "#ffffff",
            itemSelectedColor: "#8E6CEF",
          },
        },
      }}
    >
      <Flex>
        <Menu
          onClick={onClick}
          style={{ width: 250 }}
          mode="inline"
          items={menuItems}
          selectedKeys={[location.pathname]} // Dynamically select menu item based on location
        />
        <Flex vertical style={{ width: "100vw" }}>
          <div
            style={{
              backgroundColor: "#8E6CEF",
              alignContent: "center",
              paddingLeft: "10px",
              paddingRight: "40px",
              height: 60,
            }}
          >
            <Flex justify="space-between">
              <Space size={"middle"}>
                <VscThreeBars size={24} color="white" />
                <Typography.Text
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Hello World
                </Typography.Text>
              </Space>

              <Space size={"middle"}>
                <BiSolidBell size={24} color="white" />
                <FaCircleUser size={24} color="white" />
              </Space>
            </Flex>
          </div>
          <SaujiRoutes />
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default NavBar;
