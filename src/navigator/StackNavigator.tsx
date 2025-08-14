import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { BACKGROUNDCOLOR, PRIMARY_COLOR } from '../commons/constants';
import { useState } from 'react';

const Stack = createStackNavigator();

export interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

const users: User[] = [
    { id: 1, name: 'Andy', lastName: 'Limaico', username: 'alimaico', password: '123456', email: 'alimaico@gmail.com' },
    { id: 2, name: 'Tamia', lastName: 'Flores', username: 'tflores', password: '654321', email: 'tflores@gmail.com' },

]

export const StackNavigator = () => {

    const [listUser, setListUser] = useState<User[]>(users);

    const addUser = (user: User): void => {
        setListUser([...listUser, user]);
    }

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: BACKGROUNDCOLOR
                }
            }}>
            <Stack.Screen name="Login" options={{ headerShown: false }} children={() => <LoginScreen users={listUser} />} />
            <Stack.Screen name="Register" options={{ headerShown: false }} children={() => <RegisterScreen user={listUser} addUser={addUser} />} />
        </Stack.Navigator>
    );
}