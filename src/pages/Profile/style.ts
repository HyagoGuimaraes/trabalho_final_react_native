import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F7F9"
  },

  container: {
    flex: 1,
    padding: 16
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  loadingText: {
    marginTop: 12,
    color: "#374151"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#E6E8EC",
  },

  headerInfo: {
    flex: 1
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827"
  },

  email: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },

  goalText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },

  progressBar: {
    height: 10,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#34C759"
  },

  progressLabel: {
    marginTop: 6,
    color: "#374151"
  },

  row: {
    flexDirection: "row",
    gap: 12
  },

  col: {
    flex: 1
  },

  label: {
    fontSize: 13,
    color: "#6B7280"
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginTop: 2
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },

  tag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },

  tagText: {
    color: "#1D4ED8",
    fontWeight: "600"
  },

  primaryButton: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "flex-end",
  },

  modal: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: "85%",
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },

  inputLabel: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 8
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 12,
    marginTop: 6,
    color: "#111827",
  },

  prefItem: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  prefItemActive: {
    borderColor: "#34C759",
    backgroundColor: "#ECFDF5"
  },

  prefText: {
    color: "#374151"
  },

  prefTextActive: {
    color: "#065F46",
    fontWeight: "700"
  },

  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 16,
  },

  cancel: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },

  cancelText: {
    color: "#374151",
    fontWeight: "600"
  },

  save: {
    flex: 1,
    backgroundColor: "#34C759",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },

  saveText: {
    color: "#FFFFFF",
    fontWeight: "700"
  },
});
