import React, { createContext, useContext, useState } from "react"
import { Alert } from "react-native";
import { LoginUser } from "../service/LoginUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface PropsAuth {
  email: string
  setEmail: (value: string) => void;
  password: string
  setPassword: (value: string) => void;
  login: (email: string, password: string) => Promise<boolean>;
  getData: () => Promise<boolean>;
}

interface PropsApi {
  password: string;
  email: string;
}

interface PropsUser {
  name: string,
  email: string,
  password: string,
  id: string
}

const AuthContext = createContext<PropsAuth>({
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  login: async () => false,
  getData: async () => false
})

interface AuthProps {
  children: React.ReactNode
}
export const AuthProvider = ({children}: AuthProps) => {
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<PropsUser | null>(null)
  
  const saveData = async (user: PropsUser) => {
    try {
      const jsonValue = JSON.stringify(user)
      await AsyncStorage.setItem('@user', jsonValue)
    } catch (error) {
      return error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user')
      if(value){
        return true
      } else return false
    } catch (error) {
      return false
    }
  }
  
  const login = async (email: string, password: string) => {
      
    const response = await LoginUser();
    const users = response?.data
    const foundUser = users.find((user: PropsApi) => user.email === email && user.password === password)
    if(foundUser){
      setUser(foundUser)
      saveData(foundUser)
      return true
    } 

    else {
      Alert.alert("Nenhum Usuario Encontrado")
      return false
    } 
  }
    
  


  return (
    <AuthContext.Provider value={{email, setEmail, password, setPassword, login, getData}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

