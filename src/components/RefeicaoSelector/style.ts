import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    button: {
        padding: 8,
        borderWidth: 1,
        borderColor: '#4caf50',
        borderRadius: 6,
    },

    selected: {
        backgroundColor: '#4caf50',
    },

    text: {
        color: '#2e7d32',
        fontWeight: '500',
    },
}); 