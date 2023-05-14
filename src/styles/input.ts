import { inputAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys)

const projectInput = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "grey.2",
    color: "grey.0",
    bg: "grey.2",
    borderRadius: "4px",
    _focus: {
      borderColor: "grey.0"
    }
  }
})

const variants = {
  projectInput
}

export const Input = defineMultiStyleConfig({ 
  variants,
  defaultProps: {
    variant: "projectInput"
  }
})