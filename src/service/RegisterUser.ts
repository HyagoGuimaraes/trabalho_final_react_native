import { Api } from "./api";

interface PropsRegister {
  name: string;
  email: string;
  password: string;
  height: string;
  weight: string;
}
export const RegisterUser = async ({ name, email, password, height, weight }: PropsRegister) => {

  const data = { name, email, password, height, weight }

  try {
    const response = await Api.post('/users', data)
    return response
  } catch (error) { }
};