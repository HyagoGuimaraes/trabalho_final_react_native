import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    elevation: 3,
    margin: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  big: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  medium: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.6,
  },
  macros: {
    marginTop: 15,
  },
  macroText: {
    fontSize: 18,
    marginBottom: 4,
  },
});
