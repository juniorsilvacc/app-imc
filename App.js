import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class App extends Component {
 render(){
  return (

    
    <View style={styles.container}>

      <View style={styles.entradas}>
        <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} />
        <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} />
      </View>

        <TouchableOpacity style={styles.button} onPress={() => {}}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.buttonResultado}>30</Text>
        <Text style={[styles.buttonResultado, {fontSize: 35} ]}>Obesidade</Text>
    </View>

   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection: 'row',
  },  
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#89FFA5',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold'
  },
  buttonResultado: {
    alignSelf: 'center',
    color: '#B2B2B2',
    fontSize: 65,
  }
})