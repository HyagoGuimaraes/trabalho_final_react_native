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
    borderColor: "#cfcfcf",
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },

  /* Post */
  postContainer: {
    backgroundColor: "#fff",
    marginBottom: 30,
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
    width: "100%",
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },

  imagemContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#eee",
  },

  postImage: {
    width: "95%",
    height: 260,
    marginVertical: 10,
    borderRadius: 14,
  },

  description: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    color: "#000",
  },
});
