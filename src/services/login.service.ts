import { ILogin, IUser } from "@/interfaces/user.interface";
import api from "./api";

interface ILoginResponse {
  user: IUser
  token: string
}

export const login = async (LoginData: ILogin): Promise<[string, IUser] | undefined> => {
  try {
    const response = await api.post<ILoginResponse>("/sessions", LoginData)

    const {user, token} = response.data

    return [token, user]
    
  } catch (error) {
    console.error(error)
  }
}