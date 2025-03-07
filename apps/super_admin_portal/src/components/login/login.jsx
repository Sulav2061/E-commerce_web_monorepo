import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "react-query";
import nookies from "nookies";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import LoginImage from "../../assets/login-1.svg";
import Logo from "../../assets/main_logo.png";
import { authServices } from "service";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    (data) => authServices.userLogin(data),

    {
      onSuccess: (data) => {
        nookies.set(null, "jwt", data?.data?.accessToken);
        if (data?.data?.user?.roles?.[0] === "SUPER_ADMIN") {
          navigate("/");
          message.success("Login Succesfully!");
        } else {
          message.error("You are not super admin");
        }
      },
      onError: (data) => {
        message.error("Invaid Credentials");
      },
    }
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
          padding: "20px",
        }}
      >
        <img
          src={LoginImage}
          alt="Login illustration"
          width="100%"
          height={500}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "400px", width: "100%", padding: "20px" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={Logo} alt="Login illustration" width={120} height={120} />
            <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
              Welcome Back
            </h1>
          </div>

          <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
            <Form.Item
              label="Email"
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input type="email" placeholder="Email" {...field} />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              validateStatus={errors.password ? "error" : ""}
              help={errors.password?.message}
            >
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password placeholder="Password" {...field} />
                )}
              />
            </Form.Item>

            <div style={{ textAlign: "right" }}>
              <a
                href="/forgot-password"
                style={{ fontSize: "12px", color: "#5A5A5A" }}
              >
                Forgot password?
              </a>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ backgroundColor: "#8E6CEF", height: "40px" }}
                loading={isLoading}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
