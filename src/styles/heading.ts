import { defineStyleConfig } from '@chakra-ui/react'

export const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "700",
    fontFamily: `'Inter', sans-serif`
  },
  sizes: {
    h1: {
      fontSize: '18px'
    },
    h2: {
      fontSize: "16px"
    },
    h3: {
      fontSize: "14px"
    }
  },
  defaultProps: {
    size: "h1"
  }
})