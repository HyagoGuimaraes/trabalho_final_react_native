import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@posts";

export async function getPosts() {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export async function addPost(text: string) {
  const posts = await getPosts();
  const newPost = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };

  await AsyncStorage.setItem(KEY, JSON.stringify([newPost, ...posts]));
}
