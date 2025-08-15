import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import { BACKGROUNDCOLOR, PRIMARY_COLOR, SECUNDARY_COLOR, TERTIARY_COLOR } from '../commons/constants'

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {

    const { height } = useWindowDimensions();

    return (
        <Text
            style={{
                ...style.title,
                height: height * 0.12
            }}>
            {title}
        </Text>
    )
}

const style = StyleSheet.create({
    title: {
        color: PRIMARY_COLOR,
        fontSize: 27,
        fontWeight: 'bold',
        paddingVertical: 30,
        paddingHorizontal: 30,
    }
})
