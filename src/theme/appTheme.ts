import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";

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
    }
})