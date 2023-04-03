import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text
} from 'react-native';
import {login_screen} from '../styles/style'
import {FormComponent} from '../components/FormComponent';

import auth from '@react-native-firebase/auth';

function SignIn(props) {
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');

  const __signIn = async () => {
    try {
      let response = await auth().signInWithEmailAndPassword(
        userEmail,
        userPassword,
      );
      if (response) {
            console.log(response);
            props.navigation.navigate('HomePage', {response:response});
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={login_screen.keyboard_view}
        keyboardVerticalOffset={10}
        behavior={'position'}>
        <View style={login_screen.container}>
          <View style={login_screen.box}>
            <FormComponent
              setEmail={(email) => setUserEmail(email)}
              setPassword={(password) => setUserPassword(password)}
              onButtonText="LOGIN"
              onPress={() => __signIn()}
            />

            <TouchableOpacity
              style={login_screen.navButton}
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={login_screen.navButtonText}>
                New user? Join here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export {SignIn};