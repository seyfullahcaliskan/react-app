import { Route } from "react-router-dom";
import Navbar from "./navBar";
import { useEffect } from "react";

export default function AdminLayout(
  routes,
  getToken,
  authRoutes,
  isPrefixRoutes,
  getRoleMenu,
  setRoutesToStore,
  selected_app = "",
  namePrefix = "",
  useThemeStore
) {
  //const authRoutes = UseAuthRoutesStore((state) => state.authRoutes);
  const getRoute = () => {
    return window.location.pathname !== "/full-screen-maps";
  };

  var currentPath = window.location.pathname;
  var path = currentPath.substr(currentPath.lastIndexOf("/") + 1);

  console.log("Son segment: " + path);
  useEffect(() => {
    //getRoutes();
  }, []);

  const getRoutes = (routes) => {
    let tempList = [];
    // if (authRoutes.length > 0) {
    //   const token = getToken();
    //   if (token) {
    const authRouteItems = [];
    authRoutes.forEach((authRoute) => {
      authRoute.items.length > 0
        ? authRouteItems.push(...authRoute.items)
        : authRouteItems.push(authRoute);
    });
    for (var i = 0; i < routes.length; i++) {
      routes.forEach((route) => {
        route.items.forEach((prop, key) => {
          if (
            prop.layout === "/agent" &&
            (authRouteItems.some((e) => e.path === prop.path) ||
              authRouteItems.some((e) => e.path === prop.masterPath))
          ) {
            tempList.push(
              <Route
                path={isPrefixRoutes ? route.appName + prop.path : prop.path}
                element={prop.component}
                key={key}
              />
            );
          }
        });
      });
    }
    //   }
    // tempList.push(<Route path="*" element={<AccessDenied />} />);

    // tempList.push(
    //   <Route path="*" element={token ? <Dashboard /> : <Login />} />
    // );
    // }
    return tempList;
  };
  return <Navbar templist></Navbar>;
}
