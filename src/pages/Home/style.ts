import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: "100%",
    backgroundColor: '#F4FFE9'    
  },

  imagemContainer: {
    flex: 1,
    alignItems: "center",
    // width:
  },

  postContainer: {
    backgroundColor: "#fff",
    marginTop: 50,
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    width: "100%"
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 15,
  },

  postImage: {
    width: 350,
    height: 250,
    backgroundColor: "#ccc",
  },

  description: {
    padding: 10,
    fontSize: 50,
    color: "#000",
    height: 100,
    width: "100%",
  },

  date: {
    paddingLeft: 10,
    paddingBottom: 8,
    color: "#777",
    fontSize: 12,
  },

  descriptionContainer: {
  }
});
