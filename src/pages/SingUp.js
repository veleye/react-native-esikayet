import React, {useState, useEffect} from 'react';
import {ScrollView, View, KeyboardAvoidingView, Alert} from 'react-native';
import {login_screen} from '../styles/style'
import {FormComponent} from '../components/FormComponent';

import auth from '@react-native-firebase/auth';

function SignUp({navigation}) {
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');

  const __doSignUp = () => {
    if (!UserEmail) {
      Alert.alert('Error', 'Email required *');
      return;
    } else if (
      !UserPassword &&
      UserPassword.trim() &&
      UserPassword.length > 6
    ) {
      Alert.alert('Error', 'Weak password, minimum 6 chars');
      return;
    } else {
      __doCreateUser(UserEmail, UserPassword);
    }
  };
  const __doCreateUser = async () => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        UserEmail,
        UserPassword,
      );
      if (response) {
        console.log(response);
        Alert.alert('Successful Register', 'Welcome the React Native');
        navigation.navigate('HomePage');
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
              onButtonText="SIGNUP"
              onPress={() => __doSignUp()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export {SignUp};