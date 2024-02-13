import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from '@navigation/RootNavigator'
import HomeScreen from '../screens/HomeScreen'
import TickInfoScreen from '../screens/TickInfoScreen'

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ presentation: 'card', animation: 'fade', headerShown: false }}>
                <Stack.Screen name={'MAIN'} component={HomeScreen} />
                <Stack.Screen name={'TICKINFO'} initialParams={{ tickName: 'Ordi' }} component={TickInfoScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default HomeNavigator

const styles = StyleSheet.create({})