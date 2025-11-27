import { Api } from "./api";

export interface Post {
  id?: string;
  userId?: string;
  username: string;
  userAvatar?: string;
  description: string;
  image: string; 
  createdAt?: string;
}

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await Api.get(`/post`);
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar posts:", error);
    return [];
  }
};

export const createPost = async (post: Post): Promise<Post | null> => {
  // console.log(post.description)
  // // console.log(post.id)
  // console.log(post.userId)
  try {
    const response = await Api.post(`/post`, post);
    return response.data;
  } catch (error) {
    console.log("Erro ao criar post:", error);
    return null;
  }
};
