import { ITech } from "./tech.interface"
import { IWork } from "./work.interface"

export interface IUser {
  id: string
  name: string
  email: string
  course_module: string
  bio: string
  contact: string
  created_at: string
  updated_at: string
  techs: ITech[]
  works: IWork[]
  avatar_url: string | null
}


export interface ILogin {
  email: string
  password: string
}

export interface IRegister {
  name: string
  email: string
  password: string
  bio: string
  contact: string
  course_module: 
    "Primeiro módulo (Introdução ao Frontend)" |
    "Segundo módulo (Frontend Avançado)" |
    "Terceiro módulo (Introdução ao Backend)" |
    "Quarto módulo (Backend Avançado)"
}
