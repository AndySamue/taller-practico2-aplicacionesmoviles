import React, { useState } from 'react'
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponents } from '../components/BodyComponents'
import { BACKGROUNDCOLOR } from '../commons/constants'
import { styles } from '../theme/appTheme';
import { InputComponents } from '../components/InputComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { ButtonComponents } from '../components/ButtonComponents'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator'

interface Props {
    users: User[];
}

interface FormLogin {
    username: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {

    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: '',
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)

    const navigation = useNavigation();

    const changeForm = (property: string, value: string): void => {
        setFormLogin({ ...formLogin, [property]: value });
    }

    const verifiyUser = (): User | undefined => {
        const existUser = users.find(user => user.username == formLogin.username.trim() && user.password == formLogin.password.trim());
        return existUser;
    }

    const handleLogin = (): void => {
        // console.log(formLogin)

        if (formLogin.username.trim() == '' || formLogin.password.trim() == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }

        if (!verifiyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrecto');
            return;
        }

        navigation.dispatch(CommonActions.navigate({ name: 'Home' }))

    }

    return (
        <View>
            <StatusBar backgroundColor={BACKGROUNDCOLOR} />
            <TitleComponent title='CARAMELO MÁGICO' />
            <BodyComponents>
                <Text style={styles.textWelcome}>¡Bienvenido!</Text>
                <Text style={styles.textWelcome}>Inicia sesión para continuar</Text>
                <View style={styles.containerForm}>
                    <Text style={styles.textForm}>Ingresa tu usuario:</Text>
                    <InputComponents placeHolder='Usuario'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='username' />
                    <Text style={styles.textForm}>Ingresa tu contraseña:</Text>
                    <InputComponents placeHolder='Contraseña'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='password'
                        isPassword={hiddenPassword} />
                    <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                        size={20}
                        style={styles.icon}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />
                    <ButtonComponents textButton='Iniciar Sesión'
                        onPress={handleLogin} />
                    <Image
                        source={{
                            uri: 'https://imgs.search.brave.com/rtonddmUvxgJ1wUcUGhoNiLrDABSpejdjf3AgoWUvLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yMDcyLzIwNzI2/NTYucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs'
                        }}
                        style={styles.image} />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRegister}>¿Nuevo por aquí? Regístrate aquí</Text>
                </TouchableOpacity>
            </BodyComponents>
        </View>
    )
}
