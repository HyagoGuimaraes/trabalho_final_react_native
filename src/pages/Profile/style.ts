import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FFE9' 
  },

  imageContainer: {
    alignItems: 'center',
    marginTop: 70,
    gap:10
  },
  
  image: {
    borderWidth: 6,
    borderRadius: 100,
    height: 150,
    width: 150
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  
  dadosContainer: {
    marginTop: 40,
    backgroundColor: 'white'
  },

  tituloContainer: {
    alignItems: 'center',
    marginTop: 20
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  dados: {
    gap: 30,
    marginLeft: 50,
    marginBottom: 30,
    marginTop: 50,
    width: '80%',
  },

  button: {
    marginTop: 20,
    borderWidth: 1,
    width: 60,
    marginLeft: 20
  },

  buttonText: {
    fontSize: 15
  }

});
