import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '@assets/theme';
import RootNavigator from '@navigation/RootNavigator';
import { useFonts, Jost_100Thin, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import { Provider } from "react-redux";
import { store } from 'src/store/store';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    Jost_100Thin,
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
