import { Api } from "./api";

export interface Post {
  id?: string;
  userId: string;
  username: string;
  description: string;
  image: string; 
  createdAt: string;
}

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await Api.get("/posts");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar posts:", error);
    return [];
  }
};

export const createPost = async (post: Post): Promise<Post | null> => {
  try {
    const response = await Api.post("/posts", post);
    return response.data;
  } catch (error) {
    console.log("Erro ao criar post:", error);
    return null;
  }
};
