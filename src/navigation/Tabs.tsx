import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '@screens/Main/screens/HomeScreen';
import CoinScreen from '@screens/Main/screens/CoinScreen';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Coin' component={CoinScreen}></Tab.Screen>
            <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})