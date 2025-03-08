import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                {<Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
                /*<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
