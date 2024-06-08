import HomePage from "./pages/homePage";
import Test from "./pages/test";

const routes = {
  appName: "level3",
  name: "Level-3",
  collapse: true,
  items: [
    {
      defaultPath: true,
      name: "Anasayfa",
      path: "/planning/publish-pdi-manufacturing-plan",
      component: <HomePage />,
    },
    {
      name: "TEST",
      masterPath: "/planning/publish-pdi-manufacturing-plan",
      path: "test",
      component: <Test />,
    },
  ],
};
