import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';


export default function App() {
  return (
    <KeyboardAvoidingView style={styles.bg}>
    {/* <View style={styles.containerLogo}>
      <Image source={require('./assets/icon.png')} />
    </View> */}

    <View style={styles.container}>

      <Image style={styles.img} source={require('./assets/splash.png')} />
      <TextInput style={styles.input} placeholder='E-mail' onChangeText={() => {}} />
      <TextInput style={styles.input} placeholder='Password' onChangeText={() => {}} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txtLogin}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCreate}>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EAED'
  },

  img: {
    flex: 1,
    width: '90%',
    height: '90%',
    justifyContent: 'center',
   
  }, 

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  input: {
    backgroundColor: 'white',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },

  button: {
    marginBottom: 15,
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: 'black'
  }, 

  buttonCreate: {
    marginBottom: 15,
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  txtLogin: {
    color: '#fff'

  },

  submitText: {
    color: '#fff',
    fontSize: 18    
  }
});
