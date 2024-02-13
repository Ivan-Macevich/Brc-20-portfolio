import { StyleSheet, View, ImageBackground, TextInput, GestureResponderEvent, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme, Input, Button, Text } from '@rneui/themed';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from 'formik';
import { ISignIn, ISignUp, User } from '@screens/Auth/types/authTypes';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@navigation/routes';
import { initialSignUpValues, validationSignUpSchema } from '@screens/Auth/schemas/signUp';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../store/auth.actions';
import { useAppDispatch } from 'src/store/store';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const themeConfig = useTheme();
    const theme = themeConfig.theme
    const styles = creatStyles(themeConfig)

    const auth = getAuth();

    const handleSignUp = async (values: ISignUp) => {
        try {
            const signUpData = await createUserWithEmailAndPassword(auth, values.email, values.password);
            if (signUpData.user.email) {
                dispatch(signUpUser({ id: signUpData.user.uid, email: signUpData.user.email, name: values.name }))
            }
            console.log('registerd', signUpData.user)
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} style={[{ ...styles.container }]}>
            <View>
                <Text h1 style={{ marginTop: 28 }}>Sign Up</Text>

                <Formik
                    initialValues={initialSignUpValues}
                    validationSchema={validationSignUpSchema}
                    onSubmit={values => handleSignUp(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        isValid,
                        dirty
                    }) => (
                        <View>
                            <Input
                                placeholder="Name"
                                label='Name'
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                style={[styles.input, { borderColor: (touched.name && errors.name) ? 'red' : 'gray' }]}
                            />
                            {touched.name && errors.name && <Text t8 style={{ paddingLeft: 10, marginTop: -19, color: 'red' }}>{errors.name}</Text>}
                            <Input
                                placeholder="Email"
                                label='Email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                style={[styles.input, { borderColor: (touched.email && errors.email) ? 'red' : 'gray' }]}
                            />
                            {touched.email && errors.email && <Text t8 style={{ paddingLeft: 10, marginTop: -19, color: 'red' }}>{errors.email}</Text>}
                            <Input
                                placeholder="Password"
                                label='Password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                style={[styles.input, { borderColor: (touched.password && errors.password) ? 'red' : 'gray' }]}
                            />
                            {touched.password && errors.password && <Text t8 style={{ paddingLeft: 10, marginTop: -19, color: 'red' }}>{errors.password}</Text>}
                            <Input
                                placeholder="Repeat password"
                                label='Repeat password'
                                onChangeText={handleChange('repeatPassword')}
                                onBlur={handleBlur('repeatPassword')}
                                value={values.repeatPassword}
                                style={[styles.input, { borderColor: (touched.repeatPassword && errors.repeatPassword) ? 'red' : 'gray' }]}
                            />
                            {touched.repeatPassword && errors.repeatPassword && <Text t8 style={{ paddingLeft: 10, marginTop: -19, color: 'red' }}>{errors.repeatPassword}</Text>}
                            <TouchableOpacity style={[
                                styles.logInBtn,
                                {
                                    backgroundColor: theme.colors.primary,
                                    paddingVertical: 13,
                                    borderRadius: 10,
                                    opacity: (isValid && dirty) ? 1 : 0.5
                                }
                            ]}
                                disabled={!isValid || !dirty}
                                onPress={(event: GestureResponderEvent) => handleSubmit()}>
                                <Text t1 style={styles.txtAlignCenter}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
                <Text t2 style={[{ ...styles.txtAlignCenter, ...styles.txtOr }]}>Or</Text>
                <TouchableOpacity style={styles.logInGoogleBtn}>
                    <Image source={require('assets/icons/devicon_google.png')} />
                    <Text t1 style={[styles.txtAlignCenter, styles.txtGoogleLogIn]}>Sign Up with Google</Text>
                </TouchableOpacity>

                <Text style={[{ ...styles.txtAlignCenter, ...styles.txtSignUp }]} t4>Already have an account? <Text t3 onPress={() => navigation.navigate(Routes.SIGN_IN_SCREEN as never)}>Log in</Text></Text>
                <View style={[{ ...styles.txtAlignCenter, ...styles.boxTermsOfUse }]}>
                    <Text t4 style={[{ ...styles.txtAlignCenter, ...styles.txtTermsOfUse }]}>
                        By using this service, you agree to our
                        <Text t5> Terms of Use</Text> and <Text t5>Privacy Policy</Text>
                    </Text>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SignUpScreen

const creatStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primaryBackground,
        paddingTop: 60,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    logInBtn: {
        marginTop: 15,
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
    txtGoogleLogIn: {
        color: theme.colors.primaryBackground,
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
    boxTermsOfUse: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        marginHorizontal: 'auto',
    }
})