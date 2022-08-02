import Layout from "Layouts/Main";
import Home from "Pages/Home";
import { useRoutes } from "react-router-dom";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
  ]);
}
