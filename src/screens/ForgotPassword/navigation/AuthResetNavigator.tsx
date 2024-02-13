import { Routes } from "@navigation/routes";
import { Stack } from '@navigation/RootNavigator';
import ResetPassword from '@screens/ForgotPassword/screens/ResetPassword'
import SuccessResetPassword from '@screens/ForgotPassword/screens/SuccessResetPassword'
const { RESET_PASSWORD, SUCCESS_RESET_PASSWORD } = Routes;
const AuthResetNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ presentation: 'card', animation: 'fade', headerShown: false }}>
                <Stack.Screen name={RESET_PASSWORD} component={ResetPassword} />
                <Stack.Screen name={SUCCESS_RESET_PASSWORD} component={SuccessResetPassword} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default AuthResetNavigator
