import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.containerForm}>

      <Text style={styles.textForm}>Form</Text>

      <View>
        <Image source={require("./images/secure.png")}
          style={{ width: 100, height: 100, margin: "auto", }} />
      </View>

      <TextInput style={styles.inputForm}
        placeholder="Username"
        autoCompleteType="username"
        placeholderTextColor="#fff"
        accessibilityLabel="Enter your username"
        returnKeyType='go'
        autoCorrect={false}
      />

      <TextInput style={styles.inputForm}
        placeholder="Password"
        placeholderTextColor="#fff"
        accessibilityLabel="Enter your password"
        returnKeyType='go'
        secureTextEntry
        autoCorrect={false}
      />
      <View style={styles.buttonForm}>
      <Button 
        // onPress={onPressLearnMore}
        title="Press Me"
        color="#72c5d6"
        accessibilityLabel="Learn more about this button"
      />
      </View>
      
    </ScrollView>
  );
}

export default App;


const styles = StyleSheet.create({
  containerForm: {
    backgroundColor: '#e3a6a1'
  },

  textForm: {
    color: '#bc5f6a',
    margin: 'auto',
    padding: 25,
    fontSize: 50,
  },

  inputForm: {
    height: 40,
    borderRadius: 10,
    padding: 15,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 15,
    borderWidth: 1,
    color: 'white',
    borderColor: 'grey',
    backgroundColor: '#034b61'
  },

  buttonForm: {
    height: 40,
    borderRadius: 10,
    padding: 15,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 15,
    color: '#bc5f6a',
  }
})



