import { Routes } from "@navigation/routes";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@rneui/themed";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import PortfolioScreen from "@screens/Portfolio/screens/PortfolioScreen";
import ProfileScreen from "@screens/Profile/screens/ProfileScreen";
import HomeNavigator from "./HomeNavigator";

const MainNavigator = () => {
    const themeConfig = useTheme();
    const theme = themeConfig.theme
    const styles = createStyles(themeConfig)

    const Tab = createBottomTabNavigator();


    const getScreenOptions: (props: { route: RouteProp<ParamListBase>; navigation: any }) => any = ({
        route,
    }) => ({
        headerShown: false,
        tabBarStyle: [styles.tabBarStyle],
        tabBarIcon: ({ focused }: { focused: boolean }) => {
            let icon;

            switch (route.name) {
                case Routes.MAIN: {
                    icon = <Image style={styles.image} source={require('assets/icons/coins_disabled.png')} />
                    break
                }
                case Routes.PORTFOLIO: {
                    icon = <Image style={styles.image} source={require('assets/icons/portfolio_disabled.png')} />
                    break
                }
                case Routes.PROFILE: {
                    icon = <Image style={styles.image} source={require('assets/icons/user_disabled.png')} />
                    break
                }
            }

            return <View>{icon}</View>;

        }
    })

    return (
        <Tab.Navigator screenOptions={getScreenOptions}>
            <Tab.Screen name={Routes.HOME} component={HomeNavigator} />
            <Tab.Screen name={Routes.PORTFOLIO} component={HomeScreen} />
            <Tab.Screen name={Routes.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default MainNavigator


const createStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
    tabBarStyle: {
        backgroundColor: theme.colors.primaryBackground,
        borderTopColor: theme.colors.primaryBackground,
        borderTopWidth: 1,
    },
    iconWrapper: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    focusedIconWrapper: {
        backgroundColor: theme.colors.primaryBackground,
        borderRadius: 100,
    },
    image: {
        height: 20,
        width: 20,
    }
});