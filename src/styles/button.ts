import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: `'Inter', sans-serif`,
    borderRadius: "4px"
  },
  sizes: {
    s: {
      fontWeight: "600",
      fontSize: "12px",
      px: "16px",
      h: "32px"
    },
    n: {
      fontWeight: "500",
      fontSize: "16px",
      px: "22px",
      h: "48px"
    }
  },
  variants: {
    primary: {
      bgColor: "primary.primary",
      _hover: {
        bgColor: "primary.focus"
      },
      _disabled: {
        bgColor: "primary.negative"
      }
    },
    disable: {
      bgColor: "grey.1",
      _hover: {
        bgColor: "grey.2"
      }
    },
    medium: {
      bgColor: "grey.3",
      _hover: {
        bgColor: "grey.2"
      }
    },
    plus: {
      px: "0px",
      fontSize: "32px",
      bgColor: "grey.3",
      _hover: {
        bgColor: "grey.2"
      }
    }
  }
})