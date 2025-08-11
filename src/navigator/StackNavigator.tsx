import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { BACKGROUNDCOLOR, PRIMARY_COLOR } from '../commons/constants';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            cardStyle:{
                backgroundColor: BACKGROUNDCOLOR
            }
        }}>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
        </Stack.Navigator>
    );
}