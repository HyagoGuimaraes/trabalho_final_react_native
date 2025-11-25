import { Api } from "./api"

export const LoginUser = async () => {

  try {
    const response = Api.get('/users')
    return response
  } catch (error) {

  }
}