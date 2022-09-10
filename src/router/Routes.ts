import { ComponentType } from "react";
import Login from "../pages/auth/login";
import Registration from "../pages/auth/registration";

interface IRoute {
  path: string,
  Component: ComponentType
}

enum Routes {
  MAIN_ROUTE = '/',
  LOGIN_ROUTE = '/login',
  REGISTRATION_ROUTE = '/registration',
}

export const publicRoutes: IRoute[] = [
  {
    path: Routes.LOGIN_ROUTE,
    Component: Login
  },
  {
    path: Routes.REGISTRATION_ROUTE,
    Component: Registration
  },
]

