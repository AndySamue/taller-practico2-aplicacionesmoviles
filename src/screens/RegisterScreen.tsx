import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BACKGROUNDCOLOR, SECUNDARY_COLOR } from '../commons/constants'
import { BodyComponents } from '../components/BodyComponents'
import { InputComponents } from '../components/InputComponents'
import { styles } from '../theme/appTheme';
import { ButtonComponents } from '../components/ButtonComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { CommonActions, useNavigation } from '@react-navigation/native'

type Props = StackScreenProps<any, any>;

interface FormRegister {
    name: string;
    lastName: string;
    email: string;
    user: string;
    password: string;
}

export const RegisterScreen = ({ }: Props) => {

    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        lastName: '',
        email: '',
        user: '',
        password: '',
    })

    const navigation = useNavigation();

    const handleSingUp = (): void => {
        console.log(formRegister)
    }

    const changeForm = (property: string, value: string): void => {
        setFormRegister({ ...formRegister, [property]: value });
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
