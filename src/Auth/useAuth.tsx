import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import { LoginUser } from "../service/LoginUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface PropsPost {
  id: string;
  image: string;
  description: string;
}

export interface PropsUser {
  image: string | undefined;
  name: string;
  email: string;
  password: string;
  id: string;
  avatar?: string;
  post: PropsPost[];
  weight: string;
  height: string;
}

interface PropsAuth {
  email: string;
  setEmail: (value: string) => void;

  password: string;
  setPassword: (value: string) => void;

  login: (email: string, password: string) => Promise<boolean>;
  getData: () => Promise<boolean>;

  user: PropsUser | null;

  logOut: () => Promise<boolean>;

  /** AGORA OBRIGATÓRIO E TIPADO CORRETAMENTE */
  setUser: (user: PropsUser | null) => void;
}

const AuthContext = createContext<PropsAuth>({
  email: "",
  setEmail: () => {},

  password: "",
  setPassword: () => {},

  login: async () => false,
  getData: async () => false,

  user: null,

  logOut: async () => false,

  /** OBRIGATÓRIO PARA EVITAR UNDEFINED */
  setUser: () => {},
});

interface AuthProps {
  children: React.ReactNode;
}

export const AuthProviders = ({ children }: AuthProps) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [user, setUser] = useState<PropsUser | null>(null);

  const saveData = async (user: PropsUser) => {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");

      if (value) {
        const userStorage: PropsUser = JSON.parse(value);
        setUser(userStorage);
        navigation.navigate("StackHome" as never);
        return true;
      } else {
        setUser(null);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    const response = await LoginUser();
    const users = response?.data || [];

    const foundUser = users.find(
      (u: PropsUser) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      saveData(foundUser);
      return true;
    } else {
      Alert.alert("Nenhum Usuário Encontrado");
      return false;
    }
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("@user");
      setUser(null);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        login,
        getData,
        user,
        logOut,
        setUser, // agora seguro e obrigatório
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
