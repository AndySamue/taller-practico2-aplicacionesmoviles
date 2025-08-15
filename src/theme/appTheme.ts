import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECUNDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    textWelcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        textAlign: 'center',
    },

    containerForm: {
        marginVertical: 10,
        marginTop: 40
    },

    textRegister: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 100,
    },

    textForm: {
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
    },

    image: {
        width: 150,
        height: 150,
        marginTop: 30,
        alignSelf: 'center'
    },

    icon: {
        position: 'absolute',
        bottom: 245,
        right: 10,
    },

    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        backgroundColor: SECUNDARY_COLOR,
        padding: 15,
        borderRadius: 15
    },

    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10
    },

    containerIconModal: {
        flex: 1,
        alignItems: 'flex-end'
    },

    titleModal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },

    imageModal: {
        width: 150,
        height: 140,
        marginTop: 10
    },

    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 25
    },

    buttonQuantityText: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textQuantity: {
        fontSize: 18
    },

    buttonAddCart: {
        backgroundColor: TERTIARY_COLOR,
        marginTop: 15,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5
    },

    buttonAddCartText: {
        color: PRIMARY_COLOR,
        fontWeight: 'bold'
    },

    textStock: {
        fontSize: 18,
        color: TERTIARY_COLOR,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5
    }
})