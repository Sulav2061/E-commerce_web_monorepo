import { QueryClient, QueryClientProvider } from "react-query";
import { useLocation } from "react-router-dom";
import AuthWrapper from "./components/auth_wrapper/auth_wrapper";
import { SaujiRoutes } from "./components/routes/routes";
import NavBar from "./components/navbar/nav_bar";
import { ConfigProvider } from "antd";
function App() {
  const queryClient = new QueryClient();
  const location = useLocation();

  return (
    <>
      <ConfigProvider>
        <QueryClientProvider client={queryClient}>
          <AuthWrapper />
          {location.pathname === "/auth" ? <SaujiRoutes /> : <NavBar />}
        </QueryClientProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
