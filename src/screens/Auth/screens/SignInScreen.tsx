import { StyleSheet, View, ImageBackground, TextInput, GestureResponderEvent, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { useTheme, Input, Button, Text } from '@rneui/themed';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ErrorMessage, Formik } from 'formik';
import { ISignIn } from '@screens/Auth/types/authTypes';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { Routes } from '@navigation/routes';
import { initialSignInValues, validationSignInSchema } from '@screens/Auth/schemas/signIn';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'



const SignInScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useContext(NavigationContext);

    const themeConfig = useTheme();
    const theme = themeConfig.theme
    const styles = createStyles(themeConfig)

    const auth = getAuth();

    const handleLogIn = async (values: ISignIn) => {
        try {
            const logInData = await signInWithEmailAndPassword(auth, values.email, values.password)
            console.log('logged', logInData.user)
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} style={[{ ...styles.container }]}>
            <View>
                <Text h1 style={{ marginTop: 28 }}>Log in</Text>

                <Formik
                    initialValues={initialSignInValues}
                    onSubmit={values => handleLogIn(values)}
                    validationSchema={validationSignInSchema}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        isValid,
                        dirty,
                    }) => (
                        <View>
                            <Input
                                style={[styles.input, { borderColor: (touched.email && errors.email) ? 'red' : 'gray' }]}
                                placeholder="Email"
                                label='Email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}

                            />
                            {touched.email && errors.email && <Text t8 style={{ paddingLeft: 10, marginTop: -19, color: 'red' }}>{errors.email}</Text>}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Input
                                    style={[styles.input, { borderColor: (touched.password && errors.password) ? 'red' : 'gray' }]}
                                    placeholder="Password"
                                    label='Password'
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={!showPassword}
                                />

                                <TouchableOpacity
                                    style={{ position: 'absolute', right: 20, top: 40 }}
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <Image source={showPassword ? require('assets/icons/ph_eye_closed.png') : require('assets/icons/ph_eye.png')} />
                                </TouchableOpacity>
                            </View>
                            {touched.password && errors.password && <Text t8 style={{ paddingLeft: 10, marginTop: -19, color: 'red' }}>{errors.password}</Text>}
                            <TouchableOpacity onPress={() => navigation?.navigate(Routes.RESET, { screen: Routes.RESET_PASSWORD })}>
                                <Text t3 style={{ marginBottom: 15 }}>Forgot Password?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.logInBtn,
                                    {
                                        backgroundColor: theme.colors.primary,
                                        paddingVertical: 13,
                                        borderRadius: 10,
                                        opacity: (dirty) ? 1 : 0.5
                                    }
                                ]}
                                disabled={!dirty}
                                onPress={(event: GestureResponderEvent) => handleSubmit()}>
                                <Text t1 style={styles.txtAlignCenter}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
                <Text t2 style={[styles.txtAlignCenter, styles.txtOr]}>or</Text>
                <TouchableOpacity style={styles.logInGoogleBtn}>
                    <Image source={require('assets/icons/devicon_google.png')} />
                    <Text t1 style={[styles.txtAlignCenter, styles.txtGoogleLogIn]}>Log in with Google</Text>
                </TouchableOpacity>

                <Text style={[styles.txtAlignCenter, styles.txtSignUp]} t4>Don’t have an account? <Text t3 onPress={() => navigation?.navigate(Routes.SIGN_UP_SCREEN as never)}>Sign Up</Text>
                </Text>
                <View style={styles.boxTermsOfUse}>
                    <Text t4 style={[styles.txtAlignCenter, styles.txtTermsOfUse]}>
                        By using this service, you agree to our
                        <Text t5> Terms of Use</Text> and <Text t5>Privacy Policy</Text>
                    </Text>
                </View>
            </View >
        </KeyboardAwareScrollView >
    )
}

export default SignInScreen

const createStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primaryBackground,
        paddingTop: 60,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    logInBtn: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 13,
        borderRadius: 10,
    },
    logInGoogleBtn: {
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 20,
        backgroundColor: theme.colors.white,
        paddingVertical: 13,
        borderRadius: 10,
    },
    txtAlignCenter: {

        textAlign: 'center',
    },
    txtOr: {
        color: theme.colors.secondaryText,
        marginBottom: 10,
        marginTop: 10,
    },
    txtTermsOfUse: {
        marginTop: 25,
        width: "70%",
    },
    txtSignUp: {
        marginBottom: 10,
    },
    txtGoogleLogIn: {
        color: theme.colors.primaryBackground,
    },
    boxTermsOfUse: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        marginHorizontal: 'auto',
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    }
})