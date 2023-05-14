'use client'
import Background from "@/components/Background"
import CustomFormField from "@/components/CustomFormField"
import FormBackground from "@/components/FormBackground"
import { Heading, chakra, Button, Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

export default function Login() {
  const { handleSubmit, control, formState: { dirtyFields } } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  const isAnyRequiredFieldEmpty = Object.keys(dirtyFields).length == 2

  return (
    <Background
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      gap="35px"
    >  
      <Heading fontSize="1.5rem" color="primary.primary">Kenzie Hub</Heading>
      <FormBackground
        w="90vw"
        maxW="380px"
      >
        <chakra.form
          display="flex"
          flexDir="column"
          gap="22px"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading as="h1" textAlign="center">Login</Heading>
          <CustomFormField label="Email" type="email" name="email" control={control} rules={{required: true}}/>
          <CustomFormField label="Senha" isPassword name="password" control={control} rules={{required: true}}/>
          <Button variant="primary" size="normal" type="submit" isDisabled={!isAnyRequiredFieldEmpty}>Entrar</Button>
          <Text textStyle="headline-bold" color="grey.1" textAlign="center">Ainda não possui uma conta?</Text>
          <Link href="/register" w="100%">
            <Button variant="disable" size="normal" w="100%">Cadastre-se</Button>
          </Link>
        </chakra.form>
      </FormBackground>
    </Background>
  )
}