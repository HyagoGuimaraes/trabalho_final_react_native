import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@posts";

export type Post = {
  id: number;
  content: string;
  createdAt: string;
};


export async function getPosts(): Promise<Post[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}


export async function addPost(content: string) {
  const posts = await getPosts();
  
  const newPost: Post = {
    id: Date.now(),
    content,
    createdAt: new Date().toISOString(),
  };

  const updated = [newPost, ...posts];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newPost;
}
