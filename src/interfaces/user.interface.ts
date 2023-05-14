export interface IUser {
  
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
