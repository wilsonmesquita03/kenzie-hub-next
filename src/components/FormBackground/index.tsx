import { Box, BoxProps } from "@chakra-ui/react";

function FormBackground({children, ...rest}: BoxProps) {
  return (
    <Box
      px="22px"
      py="42px"
      bgColor="grey.3"
      borderRadius="4px"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default FormBackground