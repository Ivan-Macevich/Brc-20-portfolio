import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme, Input, Button, Text } from '@rneui/themed';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getAuth, signOut } from 'firebase/auth';
import Tabs from '@navigation/Tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const ProfileScreen = ({ navigation }: any) => {
  const themeConfig = useTheme();
  const theme = themeConfig.theme
  const styles = createStyles(themeConfig)
  const auth = getAuth()
  const handleSignOut = async () => {
    await signOut(auth)
    console.log('sign out', auth)
  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} style={[{ ...styles.container }]}>
      <Text h1>ProfileScreen</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text h1>
          Sign out
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  )
}

export default ProfileScreen

const createStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryBackground,
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 20
  },
})