import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  foodImage: {
    height: 60,
    width: 60,
    borderRadius: 8,
    marginRight: 12,
  },

  placeholderImage: {
    height: 60,
    width: 60,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  textImage: {
    color: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoContainer: {
    flex: 1,
  },

  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 4,
  },

  details: {
    fontSize: 13,
    color: "#555",
  },

  protein: {
    color: "#1565c0",
    fontWeight: "500",
  },

  carbo: {
    color: "#d32f2f",
    fontWeight: "500",
  },
});
