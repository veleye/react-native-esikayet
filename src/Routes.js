import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignUp } from './pages/SingUp';
import { SignIn } from './pages/SignIn';
import HomePage from './components/HomePage';
import Camera from './pages/Camera';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: true }}>
                <Stack.Screen name="SignIn" options={{ title: 'Login Page' }} component={SignIn} />
                <Stack.Screen name="SignUp" options={{ title: 'SignUp Page' }} component={SignUp} />
                <Stack.Screen name="HomePage" options={{ title: 'Home Page' }} component={HomePage} />
                <Stack.Screen name="Camera" component={Camera}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;