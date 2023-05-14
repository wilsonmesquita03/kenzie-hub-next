import { FormControl, FormLabel, FormErrorMessage,Input, InputRightElement, InputGroup, IconButton, InputProps } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { textStyles } from "@/styles/textStyles";
import { Controller, Control, RegisterOptions } from "react-hook-form";

interface ICustomFormFieldProps extends InputProps {
  name: string
  control: Control<any>
  rules?: Partial<RegisterOptions>
  label: string
  error?: string
  isPassword?: boolean
}

function CustomFormField({ label, error, isPassword, ...rest }: ICustomFormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel sx={textStyles.headline} color="grey.0">{label}</FormLabel>
      <Controller
        {...rest}
        render={({ field }) => (
          <InputGroup>
            <Input
              {...field}
              h="48px"
              color="grey.0"
              bgColor="grey.2"
              type={isPassword && !showPassword ? "password" : "text"}
            />
            {isPassword && (
              <InputRightElement
                h="100%"
              >
                <IconButton
                  bgColor="transparent"
                  _hover={{
                    bgColor: "transparent"
                  }}
                  icon={showPassword ? <FaEyeSlash color="white" /> : <FaEye color="white" />}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={handleTogglePassword}
                  h="100%"
                />
              </InputRightElement>
            )}
          </InputGroup>
        )}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}

export default CustomFormField