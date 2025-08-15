import React from 'react'
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { View } from 'react-native'
import { styles } from '../../../theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_COLOR } from '../../../commons/constants'
import { Cart } from '../HomeScreen'

interface Props {
    visible: boolean;
    setShowModal: () => void;
    cart: Cart[]
}

export const ModalCart = ({ visible, setShowModal, cart }: Props) => {
    const { width } = useWindowDimensions();

    // Función para mostrar total pagar
    const totalPay = () => {
        let total = 0; // Acumulador
        cart.forEach(product => {
            total = total + product.total;
        })

        return total;
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        <View style={styles.containerIconModal}>
                            <Icon name='cancel'
                                size={18}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={localStyles.headerTable}>
                        <Text style={localStyles.headerTextTable}>Producto</Text>
                        <View style={localStyles.headerInformation}>
                            <Text style={localStyles.headerTextTable}>Pre.</Text>
                            <Text style={localStyles.headerTextTable}>Cant.</Text>
                            <Text style={localStyles.headerTextTable}>Total</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={cart}
                            renderItem={({ item }) =>
                                <View style={localStyles.headerTable}>
                                    <Text>{item.name}</Text>
                                    <View style={localStyles.headerInformation}>
                                        <Text style={{ paddingHorizontal: 8 }}>${item.price.toFixed(2)}</Text>
                                        <Text style={{ paddingHorizontal: 20 }}>{item.quantity}</Text>
                                        <Text style={{ paddingHorizontal: 8 }}>${item.total.toFixed(2)}</Text>
                                    </View>
                                </View>}
                            keyExtractor={item => item.id.toString()} />
                    </View>
                    <View style = {localStyles.containerTotal}>
                        <Text style = {localStyles.headerTextTable}>Total pagar: ${totalPay().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity
                    style = {styles.buttonAddCart}>
                        <Text style ={styles.buttonAddCartText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const localStyles = StyleSheet.create({
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    headerInformation: {
        flexDirection: 'row'

    },

    headerTextTable: {
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        fontSize: 16,
        marginHorizontal: 9
    },

    containerTotal: {
        alignItems: 'flex-end',
        marginTop: 15
    }
})
