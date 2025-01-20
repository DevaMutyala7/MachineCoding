import { RouteConfig } from "types/RouteConfig";
import { RouteId, Routepath } from "types/routes";
import Home from "views/Home";
import MySwitch from "views/MySwitch";
import { NotFound } from "views/NotFound";
import MyStepper from "views/Stepper/MyStepper";
import MyTable from "views/Table/MyTable";
import TicTacToe from "views/TicTacToe";

export const Routes: RouteConfig[] = [
  {
    id: RouteId.Home,
    path: Routepath.Home,
    component: <Home />,
    title: "Home",
  },
  {
    id: RouteId.TicTacToe,
    path: Routepath.ticTacToe,
    component: <TicTacToe />,
    title: "Tic-Tac-Toe",
    description: "This is a simple Tic-Tac-Toe with a bot",
  },
  {
    id: RouteId.Table,
    path: Routepath.table,
    component: <MyTable />,
    title: "Table",
    description: "A Custom Table With all the functionalities",
  },
  {
    id: RouteId.Stepper,
    path: Routepath.stepper,
    component: <MyStepper />,
    title: "Multi Stepper",
    description: "This is just a multi stepper",
  },
  {
    id: RouteId.Switch,
    path: Routepath.switch,
    component: <MySwitch />,
    title: "Switch Component",
    description:
      "Switch-case component is just like switch-case method, the only difference is it conditionally renders elements that pass different cases",
  },
  {
    id: RouteId.NotFound,
    path: Routepath.NotFound,
    component: <NotFound />,
  },
];
