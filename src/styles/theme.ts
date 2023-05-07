import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { textStyles } from "./textStyles"
import { Heading } from "./heading";
import { Button } from "./button"

const theme = extendTheme({
  colors,
  textStyles,
  components: {
    Heading,
    Button
  }
})

export default theme