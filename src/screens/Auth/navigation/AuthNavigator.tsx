import React from 'react'
import { Routes } from '@navigation/routes';
import SignInScreen from '@screens/Auth/screens/SignInScreen';
import SignUpScreen from '@screens/Auth/screens/SignUpScreen';
import { Stack } from '@navigation/RootNavigator';


const { SIGN_IN_SCREEN, SIGN_UP_SCREEN } = Routes;
const AuthNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ presentation: 'card', animation: 'fade', headerShown: false }}>
                <Stack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
                <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default AuthNavigator
