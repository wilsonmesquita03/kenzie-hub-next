'use server'
import { ILogin, IUser } from "@/interfaces/user.interface";
import api from "./api";
import { cookies } from "next/headers"
import { AxiosError } from "axios";

interface ILoginResponse {
  user: IUser
  token: string
}

interface ILoginError {
  status: string
  message: string
}

type LoginResult = {
  user: IUser | null;
  message: string;
};

export async function login(LoginData: ILogin): Promise<LoginResult> {
  const result: LoginResult = {
    user: null,
    message: ""
  }

  return api.post<ILoginResponse>("/sessions", LoginData)
    .then(response => {
      const {user, token} = response.data
  
      cookies().set("@kh:token", token)

      result.user = user
      result.message = "Logado com sucesso"

      return result 

    })
    .catch((error: AxiosError<ILoginError>) => {
      result.message = error.response?.data.message || "Ocorreu um erro durante o login";

      return result
    })
}