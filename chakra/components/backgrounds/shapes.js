import { Box } from "@chakra-ui/react";
// import { styles } from "../../chakra/global-styles";
// used by: '@/chakra/layouts/default'

export function Wave({ ...rest }) {
  return (
    <Box
      as='svg'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1080 470'
      {...rest}
    >
      <path d='M0 329c385.7 0 165.3-219 551-219V0H0z' />
      <path d='M550 110c371 0 159-56 530-56V0H550z' />
    </Box>
  );
}
