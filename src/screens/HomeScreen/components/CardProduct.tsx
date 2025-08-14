import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../HomeScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_COLOR } from '../../../commons/constants';
import { Modal } from 'react-native';
import { ModalProduct } from './ModalProduct';

interface Props {
    item: Product;
}

export const CardProduct = ({ item }: Props) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <View style={localstyles.container}>
                <Image
                    source={{ uri: item.pathImage }}
                    style={localstyles.image} />
                <View>
                    <Text style={localstyles.title}>{item.name}</Text>
                    <Text>Precio: ${item.price.toFixed(2)}</Text>
                </View>
                <View style={localstyles.containerIcon}>
                    <Icon name='add-shopping-cart' size={30} color={PRIMARY_COLOR}
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <ModalProduct visible={showModal} item={item} />
        </View>
    )
}

const localstyles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    image: {
        width: 70,
        height: 70
    },

    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
        // backgroundColor: 'blue'
    }

})