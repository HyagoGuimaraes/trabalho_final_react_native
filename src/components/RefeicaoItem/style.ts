import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  refeicaoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4caf50',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },

  itemsBox: {
    marginTop: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },

  emptyText: {
    fontStyle: "italic",
    color: "#777",
    fontSize: 14,
    marginTop: 5,
  },

  itemText: {
    fontSize: 14,
    marginVertical: 2,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },

  removeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  removeText: {
    fontSize: 16,
    color: "#fff",
    padding: 5,
  },

});