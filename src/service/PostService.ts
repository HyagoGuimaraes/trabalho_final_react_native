import { Api } from "./api";

export interface Post {
  id?: string;
  userId?: string;
  username: string;
  description: string;
  image: string; 
  createdAt?: string;
  shared: boolean;
}

export const getPosts = async (post: {userId: string}): Promise<Post[] | null> => {
  try {
    const response = await Api.get(`/users`);
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar posts:", error);
    return [];
  }
};

export const createPost = async (post: Post): Promise<Post | null> => {
  console.log(post.description)
  // console.log(post.id)
  console.log(post.userId)
  try {
    const response = await Api.post(`/users/${post.userId}/post`, post);
    return response.data;
  } catch (error) {
    console.log("Erro ao criar post:", error);
    return null;
  }
};
