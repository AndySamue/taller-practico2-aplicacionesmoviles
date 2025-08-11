import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BACKGROUNDCOLOR, SECUNDARY_COLOR } from '../commons/constants'
import { BodyComponents } from '../components/BodyComponents'
import { InputComponents } from '../components/InputComponents'
import { styles } from '../theme/appTheme';
import { ButtonComponents } from '../components/ButtonComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { InputComponentsRegister } from '../components/InputComponentsRegister'

type Props = StackScreenProps<any, any>;

interface FormRegister {
    name: string;
    lastName: string;
    email: string;
    user: string;
    password: string;
}

export const RegisterScreen = ({ navigation }: Props) => {

    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        lastName: '',
        email: '',
        user: '',
        password: '',
    })

    const handleLogin = (): void => {
        console.log(formRegister)
    }

    const changeRegister = (property: string, value: string): void => {
        setFormRegister({ ...formRegister, [property]: value });
    }

    return (
        <View>
            <StatusBar backgroundColor={BACKGROUNDCOLOR} />
            <TitleComponent title='REGISTRA TUS DATOS' />
            <BodyComponents>
                <View style={styles.containerForm}>
                    <Text style={styles.textForm}>Ingresa tu nombre:</Text>
                    <InputComponentsRegister placeHolder='Nombre'
                        keyboardType='default'
                        changeRegister={changeRegister}
                        property='name' />
                    <Text style={styles.textForm}>Ingresa tu apellido:</Text>
                    <InputComponentsRegister placeHolder='Apellido'
                        keyboardType='default'
                        changeRegister={changeRegister}
                        property='lastName' />
                    <Text style={styles.textForm}>Ingresa tu email:</Text>
                    <InputComponentsRegister placeHolder='Correo'
                        keyboardType='email-address'
                        changeRegister={changeRegister}
                        property='email' />
                    <Text style={styles.textForm}>Crea un usuario:</Text>
                    <InputComponentsRegister placeHolder='Usuario'
                        keyboardType='default'
                        changeRegister={changeRegister}
                        property='user' />
                    <Text style={styles.textForm}>Crea una contraseña:</Text>
                    <InputComponentsRegister placeHolder='Contraseña'
                        keyboardType='default'
                        changeRegister={changeRegister}
                        property='password' />
                </View>
                <ButtonComponents textButton='Crear Cuenta'
                    handleLogin={handleLogin} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textRegister}>¿Ya tienes cuenta? Inicia sesión aquí</Text>
                </TouchableOpacity>

            </BodyComponents>
        </View>
    )
}
