import {
  Tag as ChTag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

import { CustomIcon } from "@/chakra/icons/custom-icon";

export function Tag({
  icon = "edit",
  label = "",
  iconProps = {},
  variant = "subtle",
  colorScheme = "gray",
  ...rest
}) {
  const Icon = () => <CustomIcon {...{ icon, ...iconProps }} />;

  return (
    <ChTag {...{ colorScheme, variant, ...rest }}>
      <TagLeftIcon boxSize='12px' as={Icon} />
      <TagLabel>{label}</TagLabel>
    </ChTag>
  );
}

<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 46 47'>
  <defs />
  <path
    fill='#000'
    d='M13.47 21.097c3.055-3.054 8.382-3.054 11.436 0l1.906 1.906 3.811-3.812-1.905-1.906a13.384 13.384 0 00-9.53-3.949 13.384 13.384 0 00-9.53 3.95l-5.72 5.717c-5.25 5.254-5.25 13.807 0 19.062a13.433 13.433 0 009.53 3.94A13.43 13.43 0 0023 42.066l1.906-1.906-3.812-3.812-1.906 1.906c-3.154 3.146-8.284 3.151-11.438 0-3.151-3.154-3.151-8.284 0-11.438l5.72-5.718z'
  />
  <path
    fill='#000'
    d='M23 3.942l-1.906 1.905 3.812 3.812 1.906-1.906c3.151-3.146 8.281-3.151 11.438 0 3.151 3.154 3.151 8.284 0 11.438l-5.72 5.718c-3.055 3.054-8.382 3.054-11.436 0l-1.906-1.906-3.811 3.812 1.905 1.906a13.384 13.384 0 009.53 3.949c3.601 0 6.987-1.405 9.53-3.95l5.72-5.717c5.25-5.254 5.25-13.808 0-19.061-5.257-5.257-13.81-5.254-19.062 0z'
  />
</svg>;
