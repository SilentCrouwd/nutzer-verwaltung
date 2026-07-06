import { createContext } from "react";

interface RenderContextType {
  render: boolean;
  setRender?: (value: boolean) => void;
}

export const RenderContext = createContext<RenderContextType>({
  render: false,
  setRender: () => {},
});
