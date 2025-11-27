import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ff0000ff",
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffffff"
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  inputQt: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },

  resultsContainer: {
    maxHeight: 250,
    marginTop: 10,
    overflow: "hidden",
  },

  modalClose: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: '#e5e5e5',
    borderRadius: 8,
    alignItems: 'center',
  },
});