import { createContext, useContext, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { useColor } from "@/chakra/hooks/use-color";

export const Layer0Wrapper = ({ bg, children, ...rest }) => {
  const { color } = useColor();
  return (
    <Box
      zIndex={-1}
      h='full'
      w='full'
      position='absolute'
      top={0}
      left={0}
      bg={bg || color("bg")}
      {...rest}
    >
      {children}
    </Box>
  );
};

const Layer0StateContext = createContext();
const Layer0DispatchContext = createContext();

function Layer0({ children, ...rest }) {
  return <Layer0Wrapper {...rest}>{children}</Layer0Wrapper>;
}

export function Layer0Provider({ children }) {
  const [Layer0Props, setLayer0Props] = useState(null); // : { model, fields, initialData, action }

  return (
    <Layer0StateContext.Provider value={{ Layer0Props }}>
      <Layer0DispatchContext.Provider value={{ setLayer0Props }}>
        <Layer0Wrapper {...Layer0Props} />
        {children}
      </Layer0DispatchContext.Provider>
    </Layer0StateContext.Provider>
  );
}

export const useLayer0State = () => {
  const context = useContext(Layer0StateContext);
  if (context === undefined) {
    throw new Error("useLayer0State must be used within a Layer0Provider");
  }

  return { context };
};

export const useLayer0Dispatch = () => {
  const context = useContext(Layer0DispatchContext);
  if (context === undefined) {
    throw new Error("useLayer0State must be used within a Layer0Provider");
  }

  return { ...context, Layer0Wrapper };
};
