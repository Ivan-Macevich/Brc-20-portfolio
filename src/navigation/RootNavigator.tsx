import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import AuthNavigator from '@screens/Auth/navigation/AuthNavigator';
import AuthResetNavigator from '@screens/ForgotPassword/navigation/AuthResetNavigator';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import MainNavigator from '@screens/Main/navigation/MainNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './Tabs';

export const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    const auth = getAuth();
    const [user, setUser] = useState<User | null>();

    const Tab = createBottomTabNavigator();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('User active', user)
            } else {
                setUser(null);
            }
        })
    }, [])

    return (
        <Stack.Navigator>
            {user ? (
                <>
                    <Stack.Group screenOptions={{ presentation: 'card', animation: 'fade', headerShown: false }}>
                        <Stack.Screen name={Routes.MAIN} component={MainNavigator}></Stack.Screen>
                    </Stack.Group>
                </>
            ) : (
                <>
                    <Stack.Group screenOptions={{ presentation: 'card', animation: 'fade', headerShown: false }}>
                        <Stack.Screen name={Routes.AUTH} component={AuthNavigator}></Stack.Screen>
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: 'card', animation: 'fade', headerShown: false }}>
                        <Stack.Screen name={Routes.RESET} component={AuthResetNavigator}></Stack.Screen>
                    </Stack.Group>
                </>
            )}
        </Stack.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})