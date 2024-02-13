import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { useTheme, Input, Button, Text } from '@rneui/themed';
import React, { useContext } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContext } from '@react-navigation/native';
import { Routes } from '@navigation/routes';

const SuccessResetPassword = () => {
    const themeConfig = useTheme();
    const theme = themeConfig.theme
    const styles = creatStyles(themeConfig)

    const navigation = useContext(NavigationContext);

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} style={[{ ...styles.container }]}>
            <View style={styles.viewContainer}>
                <Image style={styles.image} source={require('assets/reset_success.png')} />
                <Text h1>Success!</Text>
                <Text t4 style={{ textAlign: 'center', width: '90%', marginTop: 20 }}>The link was sent to your email. Please,
                    check your email and follow the instructions.</Text>

                <TouchableOpacity
                    style={styles.toAuthBtn}
                    onPress={() => navigation?.navigate(Routes.AUTH, { screen: Routes.SIGN_IN_SCREEN })}
                >
                    <Text t1 style={styles.txtAlignCenter}>To authorization</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SuccessResetPassword

const creatStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: theme.colors.primary,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    viewContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    txtAlignCenter: {
        textAlign: 'center',
    },
    toAuthBtn: {
        backgroundColor: theme.colors.orange,
        paddingVertical: 13,
        borderRadius: 10,
        marginTop: 30,
        width: '100%',
    },
})