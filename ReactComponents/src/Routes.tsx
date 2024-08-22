import { RouteConfig } from "types/RouteConfig";
import { RouteId, Routepath } from "types/routes";
import Home from "views/Home";
import { NotFound } from "views/NotFound";
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
    id: RouteId.NotFound,
    path: Routepath.NotFound,
    component: <NotFound />,
  },
];
