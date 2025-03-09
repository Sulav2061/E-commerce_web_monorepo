import React, { useState } from "react";
import { Form, Input, Select, Button, message, Image } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { BreadCrumb, PageTitle, SaujiInput, SaujiLabel, SaujiLayout } from "ui";
import { useMutation } from "react-query";
import { adminFormServices } from "service";

const KYCFORM = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { TextArea } = Input;
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const { id } = useParams();

  const record = location.state;
  const { mutate, isLoading } = useMutation(
    (data) => adminFormServices.updateStatus(data, id),
    {
      onSuccess: () => {
        if (selectedStatus.value === "Approved") {
          message.success("Status Updated:You are now a seller");
          navigate("/kyc/approved");
        } else if (selectedStatus.value === "Decline") {
          message.error("Failed:Review your KYC");
          navigate("/kyc/decline");
        }
      },
      onError: () => {
        message.error("Failed:Failed to update the status");
      },
    }
  );
  const handleSubmit = async () => {
    const payload = {
      status: selectedStatus.value,
      userId: record?.userId,
    };

    mutate(payload);
  };

  const options = [
    {
      value: "Approved",
      label: "Approved",
      icon: <CheckCircleOutlined style={{ color: "green" }} />,
    },
    {
      value: "Decline",
      label: "Decline",
      icon: <CloseCircleOutlined style={{ color: "red" }} />,
    },
    {
      value: "Pending",
      label: "Pending",
      icon: <ExclamationCircleOutlined style={{ color: "orange" }} />,
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <PageTitle title={"KYC Form"} />
      <BreadCrumb items={["KYC", "Pending", " Form"]} />
      <SaujiLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div>
            <SaujiLabel>Status</SaujiLabel> <br />
            <Select
              style={{ width: "200px" }}
              defaultValue={selectedStatus}
              labelInValue
              optionLabelProp="label"
              onChange={(value) => setSelectedStatus(value)}
            >
              {options.map((option) => (
                <Select.Option
                  key={option.value}
                  value={option.value}
                  label={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {option.icon}{" "}
                      <span style={{ marginLeft: 8 }}>{option.label}</span>
                    </div>
                  }
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {option.icon}{" "}
                    <span style={{ marginLeft: 8 }}>{option.label}</span>
                  </div>
                </Select.Option>
              ))}
            </Select>
          </div>

          <Button
            type="primary"
            style={{ backgroundColor: "#8E6CEF" }}
            loading={isLoading}
            onClick={() => {
              handleSubmit();
            }}
          >
            Verify
          </Button>
        </div>

        <Form>
          <SaujiLayout>
            <PageTitle title={"Personal Details"} />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "12px",
              }}
            >
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Email</SaujiLabel>
                <SaujiInput defaultValue={record?.email} placeholder="E-mail" />
              </div>
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Name</SaujiLabel>
                <SaujiInput placeholder="Name" defaultValue={record?.name} />
              </div>

              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Address</SaujiLabel>
                <SaujiInput
                  placeholder="Address"
                  defaultValue={record?.address}
                />
              </div>
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Nationality</SaujiLabel>
                <SaujiInput
                  placeholder="Nationality"
                  defaultValue={record?.nationality}
                />
              </div>
            </div>
          </SaujiLayout>
          <SaujiLayout>
            <PageTitle title={"Businness Details"} />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "12px",
              }}
            >
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Business Name</SaujiLabel>
                <br />
                <SaujiInput
                  placeholder="Business Name"
                  defaultValue={record?.bName}
                />
              </div>
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Business Type</SaujiLabel>
                <SaujiInput
                  placeholder="Business Type"
                  defaultValue={record?.bType}
                />
              </div>
              <div style={{ flex: "1 1 100%" }}>
                <SaujiLabel>Business Description</SaujiLabel>
                <TextArea rows={5} defaultValue={record?.bDetails}>
                  {" "}
                </TextArea>
              </div>
            </div>
          </SaujiLayout>

          <SaujiLayout>
            <PageTitle title={"Banking Details"} />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "12px",
              }}
            >
              <div style={{ flex: "1 1 30%" }}>
                <SaujiLabel>Bank Name</SaujiLabel>
                <br />
                <SaujiInput
                  placeholder="Bank Name"
                  defaultValue={record.bankName}
                />
              </div>
              <div style={{ flex: "1 1 65%" }}>
                <SaujiLabel>Account Number</SaujiLabel>
                <SaujiInput
                  placeholder="Account Number"
                  defaultValue={record.accNum}
                />
              </div>
            </div>
          </SaujiLayout>
          <SaujiLayout>
            <PageTitle title={"Legal Details"} />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "12px",
              }}
            >
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Citizenship Number</SaujiLabel>
                <br />
                <SaujiInput
                  placeholder="Citizenship Number"
                  defaultValue={record.citizenshipNum}
                />
              </div>
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Pan Number</SaujiLabel>
                <SaujiInput
                  placeholder="Pan Number"
                  defaultValue={record.panNum}
                />
              </div>
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Front Page</SaujiLabel>
                <br />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DDDqLhH9su8IXOOfORozZB1ex54fVOuSHA&s"
                  alt="front-page"
                />
              </div>
              <div style={{ flex: "1 1 45%" }}>
                <SaujiLabel>Back Page</SaujiLabel>
                <br />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDP_NELywiXzPejTjnynfiMWDpEpJo8Vvxng&s"
                  alt="back-page"
                />
              </div>
            </div>
          </SaujiLayout>
        </Form>
      </SaujiLayout>
    </div>
  );
};

export default KYCFORM;
