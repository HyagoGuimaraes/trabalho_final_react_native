import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4FFE9",
  },

  /* Header */
  header: {
    width: "100%",
    paddingTop: 45,
    paddingBottom: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
  },

  /* Post */
  postContainer: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#e6e6e6",
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },

  username: {
    fontWeight: "600",
    fontSize: 15,
    color: "#000",
    marginLeft: 10,
  },

  imagemContainer: {
    width: "100%",
    backgroundColor: "#eee",
  },

  postImage: {
    width: "100%", // Agora ocupa todo o post
    height: 300, // Pouco maior (estilo feed)
  },

  postActions: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  postActionsIcon: {
    marginLeft: 20,
  },

  postDate: {
    fontSize: 12,
    color: "#777",
    marginLeft: 15,
  },

  usernameDesc: {
    fontWeight: "bold",
    fontSize: 15,
  },

  description: {
    fontSize: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },

  likesText: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 15,
    marginTop: 5,
  },
});
