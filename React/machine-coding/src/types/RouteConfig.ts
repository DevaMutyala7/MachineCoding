import { RouteId, Routepath } from "./routes";

export type RouteConfig = {
  id: RouteId;
  path: Routepath;
  component: React.ReactNode;
  title?: string;
  description?: string;
};
