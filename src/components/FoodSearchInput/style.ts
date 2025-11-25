import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 8,
    },
    
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#4caf50',
        borderRadius: 8,
        padding: 10,
    },

    button: {
        backgroundColor: '#4caf50',
        paddingHorizontal: 14,
        justifyContent: 'center',
        borderRadius: 8,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});