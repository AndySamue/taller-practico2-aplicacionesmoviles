import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BACKGROUNDCOLOR, SECUNDARY_COLOR } from '../commons/constants'
import { BodyComponents } from '../components/BodyComponents'
import { InputComponents } from '../components/InputComponents'
import { styles } from '../theme/appTheme';
import { ButtonComponents } from '../components/ButtonComponents'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator'

interface Props {
    user: User[];
    addUser: (user: User) => void;
}

interface FormRegister {
    name: string;
    lastName: string;
    email: string;
    user: string;
    password: string;
}

export const RegisterScreen = ({ user, addUser }: Props) => {

    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        lastName: '',
        email: '',
        user: '',
        password: '',
    })

    const navigation = useNavigation();

    const changeForm = (property: string, value: string): void => {
        setFormRegister({ ...formRegister, [property]: value });
    }

    const verifyUsername = (): User | undefined => {
        const existUserName = user.find(user => user.username == formRegister.user);
        return existUserName;
    }

    const getIdUser = (): number => {
        const getId = user.length + 1;
        return getId;
    }

    const verifyEmail = () => {
        const existEmail = user.find(user => user.email == formRegister.email);
        return existEmail;
    }

    const handleSingUp = (): void => {
        console.log(formRegister)

        if (formRegister.name == '' || formRegister.user == '' || formRegister.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }

        if (verifyUsername() != undefined) {
            Alert.alert('Error', 'El usuario ya existe ');
            return;
        }

        if (verifyEmail() != undefined) {
            Alert.alert('Error', 'El email ya existe');
            return;
        }

        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            lastName: formRegister.lastName,
            email: formRegister.email,
            username: formRegister.user,
            password: formRegister.password
        }

        addUser(newUser);

        Alert.alert('Éxito', 'Usuario registrado correctamente')

        navigation.goBack();

    }

    return (
        <View>
            <StatusBar backgroundColor={BACKGROUNDCOLOR} />
            <TitleComponent title='REGISTRA TUS DATOS' />
            <BodyComponents>
                <View style={styles.containerForm}>
                    <Text style={styles.textForm}>Ingresa tu nombre:</Text>
                    <InputComponents placeHolder='Nombre'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='name' />
                    <Text style={styles.textForm}>Ingresa tu apellido:</Text>
                    <InputComponents placeHolder='Apellido'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='lastName' />
                    <Text style={styles.textForm}>Ingresa tu email:</Text>
                    <InputComponents placeHolder='Correo'
                        keyboardType='email-address'
                        changeForm={changeForm}
                        property='email' />
                    <Text style={styles.textForm}>Crea un usuario:</Text>
                    <InputComponents placeHolder='Usuario'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='user' />
                    <Text style={styles.textForm}>Crea una contraseña:</Text>
                    <InputComponents placeHolder='Contraseña'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='password' />
                </View>
                <ButtonComponents textButton='Crear Cuenta'
                    onPress={handleSingUp} />

                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRegister}>¿Ya tienes cuenta? Inicia sesión aquí</Text>
                </TouchableOpacity>

            </BodyComponents>
        </View>
    )
}
