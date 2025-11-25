import { Api } from "./api";

interface PropsRegister {
  name: string;
  email: string;
  password: string;
}
export const RegisterUser = async ({ name, email, password }: PropsRegister) => {

  const data = { name, email, password }

  try {
    const response = await Api.post('/users', data)
    return response
  } catch (error) { }
};