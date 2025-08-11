import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native'
import { INPUT_COLOR } from '../commons/constants';


interface Props {
    placeHolder: string,
    keyboardType: KeyboardTypeOptions;
    changeForm: (property: string, value: string) => void;
    property: string;
    isPassword?: boolean;
}

export const InputComponents = ({ placeHolder, keyboardType, changeForm, property, isPassword }: Props) => {
    return (
        <TextInput
            placeholder={placeHolder}
            keyboardType={keyboardType}
            onChangeText={(value) => changeForm(property, value)}
            secureTextEntry={isPassword}
            style={styles.inputText} />
    )
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 7
    }
})
