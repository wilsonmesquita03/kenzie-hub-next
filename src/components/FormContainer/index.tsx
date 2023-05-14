'use client'
import { chakra } from "@chakra-ui/react"
import { DetailedHTMLProps, FormHTMLAttributes } from "react"

interface IFormContainerProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: React.ReactNode;
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export default function FormContainer({children, onSubmit, ...rest}: IFormContainerProps) {
  return (
    <chakra.form
      display="flex"
      flexDir="column"
      gap="22px"
      w="90vw"
      maxW="380px"
      px="22px"
      py="42px"
      borderRadius="4px"
      bgColor="grey.3"
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </chakra.form>
  )
}