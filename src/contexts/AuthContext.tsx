'use client'
import { ILogin } from "@/interfaces/user.interface"
import { login } from "@/services/login.service"
import { createContext, useState, ReactNode } from "react"

interface IAuthContext {
  isLoggedIn: boolean
  performLogin: (data: ILogin) => Promise<void>
  performRegister: (email: string, password: string) => Promise<void>
  performLogout: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

interface IAuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const performLogin = async (data: ILogin) => {
    const response = await login(data)

    if(response){
      const [token, user] = response

      setIsLoggedIn(true)
      
      console.log(user)
    }
  };

  const performRegister = async (email: string, password: string) => {
    // Lógica de registro aqui
  };

  const performLogout = async () => {
    // Lógica de logout aqui
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, performLogin, performRegister, performLogout }}>
      {children}
    </AuthContext.Provider>
  );
};