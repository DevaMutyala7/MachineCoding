import {
  faChessBoard,
  faHome,
  faTable,
  faStairs,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

export const routeConfig = [
  {
    path: "/",
    icon: faHome,
    label: "Home",
  },
  {
    path: "/tic-tac-toe",
    icon: faChessBoard,
    label: "Tic-Tac-Toe",
  },
  {
    path: "/table",
    icon: faTable,
    label: "Table",
  },
  {
    path: "/stepper",
    icon: faStairs,
    label: "Stepper",
  },
  {
    path: "/switch",
    icon: faShuffle,
    label: "Switch Component",
  },
];
