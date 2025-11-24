import { Api } from "./Api"

export const LoginUser = async () => {

  try {
    const response = Api.get('/users')
    return response
  } catch (error) {
    
  }
}