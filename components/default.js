import { useColorModeValue } from "@chakra-ui/color-mode";


import { ModeToggle } from "../components/mode-toggle";
import { Wave } from "@/components/backgrounds/shapes"; // @TODO:
// import Scaffold from "../components/structure/scaffold";
import { useColor } from "@/chakra/hooks/use-color"; // @TODO:
import { useLayer0Dispatch } from "../components/layer-0"; // @TODO:

export function DefaultLayout(props) {
  const { Layer0Wrapper } = useLayer0Dispatch();
  const fill = useColorModeValue("gray.300", "gray.800");
  return (
    <>
      <ModeToggle />
      <Scaffold {...props} />
      <Layer0Wrapper>
        <Wave
          // @DONE: check why wave is not showing
          // @DONE: wave fill color not showing
          fill={fill}
          position='fixed'
          bottom={0}
          left={0}
          transform='rotate(180deg)'
          sx={{ transformStyle: "preserve-3d" }}
          opacity={0.7}
        />
      </Layer0Wrapper>
    </>
  );
}
