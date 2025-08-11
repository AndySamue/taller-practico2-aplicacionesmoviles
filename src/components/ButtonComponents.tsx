import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { TERTIARY_COLOR } from '../commons/constants';

interface Props {
    textButton: string;
    handleLogin: () => void;
}

export const ButtonComponents = ({ textButton, handleLogin }: Props) => {
    return (
        <TouchableOpacity
            onPress={handleLogin}
            style={style.button}>
            <Text style={style.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10

    },

    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
