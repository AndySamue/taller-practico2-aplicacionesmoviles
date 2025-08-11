import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native'
import { INPUT_COLOR } from '../commons/constants';


interface Props2 {
    placeHolder: string,
    keyboardType: KeyboardTypeOptions;
    changeRegister: (property: string, value: string) => void;
    property: string;
    
}

export const InputComponentsRegister = ({ placeHolder, keyboardType, changeRegister, property,  }: Props2) => {
    return (
        <TextInput
            placeholder={placeHolder}
            keyboardType={keyboardType}
            onChangeText={(value) => changeRegister(property, value)}
            
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
