import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  header: {
    marginBottom: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 5,
    color: "#000",
  },

  subtitle: {
    fontSize: 14,
    color: "#6F746F",
  },

  newPostButton: {
    backgroundColor: "#76C043",
    paddingVertical: 14,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 35,
  },

  newPostText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  feedPlaceholder: {
    marginTop: 10,
  },

  feedText: {
    textAlign: "center",
    color: "#7A7A7A",
  },
});
