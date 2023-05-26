"use server"
import { cookies } from "next/headers"
import api from "./api"
import { IUser } from "@/interfaces/user.interface"

export async function verifyToken(){
  const cookieStorage = cookies()

  api.defaults.headers.common['Authorization'] = `Bearer ${cookieStorage.get("@kh:token")?.value}`
  
  try {
    const { data } = await api.get<IUser>("/profile")
    
    return data
  } catch (error) {
    cookieStorage.set("@kh:token", "")

    return null
  }
}