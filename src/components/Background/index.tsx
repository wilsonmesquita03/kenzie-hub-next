'use client'
import { Box, BoxProps } from "@chakra-ui/react";

function Background({children, ...rest}: BoxProps) {
  return (
    <Box
      minH="100vh"
      w="100vw"
      px="22px"
      py="42px"
      bgColor="grey.4"
      display="flex"
      flexDir="column"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Background