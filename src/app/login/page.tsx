'use client'
import Background from "@/components/Background"
import CustomFormField from "@/components/CustomFormField"
import { Heading, Button, Text } from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import FormContainer from "@/components/FormContainer"
import { ILogin } from "@/interfaces/user.interface"
import { Link } from '@chakra-ui/next-js'
import { AiFillGithub } from "react-icons/ai"


export default function Login() {
  const router = useRouter()

  const { handleSubmit, control, formState: { dirtyFields } } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  
  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data)
  }

  const isAnyRequiredFieldEmpty = Object.keys(dirtyFields).length == 2

  return (
    <Background
      alignItems="center"
      justifyContent="center"
      gap="35px"
    >  
      <Heading fontSize="1.5rem" color="primary.primary">Kenzie Hub</Heading>
        <FormContainer
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading as="h1" textAlign="center">Login</Heading>
          <CustomFormField label="Email" type="email" name="email" control={control} variant="default" rules={{required: true}}/>
          <CustomFormField label="Senha" isPassword name="password" control={control} variant="default" rules={{required: true}}/>
          <Button variant="primary" size="normal" type="submit" isDisabled={!isAnyRequiredFieldEmpty}>Entrar</Button>
          <Text textStyle="headline-bold" color="grey.1" textAlign="center">Ainda não possui uma conta?</Text>
          <Button variant="disable" size="normal" w="100%" onClick={() => router.push("/register")}>Cadastre-se</Button>
          <Link href="https://github.com/wilsonmesquita03/kenzie-hub-next" display="flex" justifyContent="center" target="_blank">
            <AiFillGithub color="white"/>
          </Link>
        </FormContainer>
    </Background>
  )
}