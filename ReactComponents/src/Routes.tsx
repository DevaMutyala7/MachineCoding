import { AuthContextProvider } from "contexts/AuthContext";
import { RouteConfig } from "types/RouteConfig";
import { RouteId, Routepath } from "types/routes";
import AnalogClock from "views/AnalogClock";
import Bubble from "views/Bubble";
import Home from "views/Home";
import MySwitch from "views/MySwitch";
import NestedCheckBox from "views/NestedCheckbox";
import CheckBoxProvider from "views/NestedCheckbox/Context/CheckBoxContext";
import { data } from "views/NestedCheckbox/data";
import { NotFound } from "views/NotFound";
import Products from "views/Products";
import MyStepper from "views/Stepper/MyStepper";
import MyTable from "views/Table/MyTable";
import TicTacToe from "views/TicTacToe";
import TodoList from "views/TodoList";
import TwoStepLogin from "views/TwoStepLogin";

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
    id: RouteId.InfiniteScroll,
    path: Routepath.infiniteScroll,
    component: <Products />,
    title: "Products Page",
    description: "Displaying the products with infinite scroll",
  },
  {
    id: RouteId.Bubbles,
    path: Routepath.bubbles,
    component: <Bubble />,
    title: "Staggering Movement",
    description: "Implemented a staggering movement",
  },
  {
    id: RouteId.TwoStepAuth,
    path: Routepath.twoStepAuth,
    component: (
      <AuthContextProvider>
        <TwoStepLogin />
      </AuthContextProvider>
    ),
    title: "Two Step Login Form",
    description:
      "Google like login UX that completes the logic flow in two steps, First, where the email is verified, and second where password verification is done",
  },
  {
    id: RouteId.TodoList,
    path: Routepath.todoList,
    component: <TodoList />,
    title: "Todo List",
    description: "An editable Todo-list",
  },
  {
    id: RouteId.AnalogClock,
    path: Routepath.analogClock,
    component: <AnalogClock date={new Date()} />,
    title: "Analog clock",
    description: "A simple analog clock with hours,minutes, seconds hand",
  },
  {
    id: RouteId.NestedComments,
    path: Routepath.nestedComments,
    component: (
      <CheckBoxProvider>
        <NestedCheckBox data={data} />
      </CheckBoxProvider>
    ),
    title: "Nested checkbox",
    description: "Ran out of description",
  },
  {
    id: RouteId.NotFound,
    path: Routepath.NotFound,
    component: <NotFound />,
  },
];
