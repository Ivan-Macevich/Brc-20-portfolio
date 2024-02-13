import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme, Input, Button, Text } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { initialSignInValues, validationSignInSchema } from '@screens/Auth/schemas/signIn';

const ResetPassword = () => {
    const themeConfig = useTheme();
    const theme = themeConfig.theme
    const styles = creatStyles(themeConfig)
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} style={styles.container}>
            <View style={styles.viewContainer}>
                <Text h1 style={{ marginTop: 28 }}>Forgot password?</Text>
                <Text t4 style={styles.txtAlignCenter}>Please, enter your email, and we will send
                    you the link to reset your password</Text>


                <Formik
                    initialValues={initialSignInValues}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSignInSchema}
                    style={{width:'100%'}}
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
                        <View style={{width:'100%'}}>
                            <Input
                                style={[styles.input, { borderColor: (touched.email && errors.email) ? 'red' : 'gray' }]}
                                placeholder="Email"
                                label='Email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}

                            />

                            <TouchableOpacity
                                style={[
                                    styles.logInBtn,
                                    {
                                        backgroundColor: theme.colors.orange,
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
            </View>
        </KeyboardAwareScrollView>
    )
}

export default ResetPassword

const creatStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: theme.colors.primary,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    viewContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 13,
        width: '100%',
    },
    txtAlignCenter: {
        textAlign: 'center',
    },
    logInBtn: {
        backgroundColor: theme.colors.orange,
        paddingVertical: 13,
        borderRadius: 10,
        width: '100%',
    },
})