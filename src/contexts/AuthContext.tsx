'use client'
import { ILogin, IUser } from "@/interfaces/user.interface"
import { login } from "@/services/login.service"
import { createContext, useState, ReactNode, useContext, useEffect, SetStateAction, Dispatch } from "react"
import { useToast } from "@chakra-ui/react"
import { verifyToken } from "@/services/verifyToken.service"
import { useRouter } from 'next/navigation'

interface IAuthContext {
  user: IUser | null
  performLogin: (data: ILogin) => Promise<void>
  performRegister: (email: string, password: string) => Promise<void>
  performLogout: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

interface IAuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: IAuthProviderProps){
  const [user, setUser] = useState<IUser | null>(null)
  const router = useRouter()
  
  const toast = useToast({
    position: "top-right",
    duration: 5000,
    isClosable: true
  })

  useEffect(() => {
    ( async () => {

      const user = await verifyToken()
      console.log(user)

      if(!user){
        router.push("/login")
        return
      }
      setUser(user)
      
      router.push("/dashboard")
    })()
  },[])

  const performLogin = async (data: ILogin) => {
    const { message, user } = await login(data)

    if(user){
      toast({
        title: 'Logado com sucesso!.',
        description: "Você fez login",
        status: 'success',
      })

      setUser(user)
    }else{
      toast({
        title: "Ops, tivemos algum problema",
        description: message,
        status: "error"
      })
    }

  }

  const performRegister = async (email: string, password: string) => {
    // Lógica de registro aqui
  }

  const performLogout = async () => {
    // Lógica de logout aqui
  }

  return (
    <AuthContext.Provider value={{ user, performLogin, performRegister, performLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro do AuthProvider')
  }
  return context
}