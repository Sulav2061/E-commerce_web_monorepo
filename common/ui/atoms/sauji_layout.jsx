import { Layout } from "antd";
export const SaujiLayout = ({ children, style }) => {
  return (
    <Layout
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: "0.75rem",
        padding: "1rem",
        marginTop: "1.3rem",
        ...style,
      }}
    >
      {children}
    </Layout>
  );
};
