import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { textStyles } from "./textStyles"
import { Heading } from "./heading";
import { Button } from "./button"
import { Input } from "./input"

const theme = extendTheme({
  colors,
  textStyles,
  components: {
    Heading,
    Button,
    Input
  },
})

export default theme