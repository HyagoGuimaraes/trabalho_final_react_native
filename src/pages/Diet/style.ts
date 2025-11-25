import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5fdf5',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },

    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 12,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: 10,
        alignSelf: 'center',
    },

    button: {
        backgroundColor: '#4caf50',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        marginTop: 16,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
    },

    scrollContainer: {
        flexGrow: 1,
    },
});