import React, { useState } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BACKGROUNDCOLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from '../../commons/constants'
import { BodyComponents } from '../../components/BodyComponents'
import { CardProducts } from './components/CardProduct'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ModalCart } from './components/ModalCart'

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {

    const products = [
        { id: 1, name: 'Jolly Rancher', price: 3.30, stock: 5, pathImage: 'https://imgs.search.brave.com/8AgZGHpZ0wMlxpRXkj3b9Qvpj5W0SwefQFFnHNvkuOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vSm9s/bHktUmFuY2hlci0y/LWluLTEtRnJ1aXQt/Rmxhdm9yZWQtSGFy/ZC1DYW5keS1CYWct/Ni01LW96XzgwZjNk/MWI4LTM2OTMtNDc2/NS1iODFiLWE2OTFi/YWQwNDVhYi5jZmI2/YWUxYzJkZjQ2NzI4/YzY4ZmIxY2Y4NGFl/YzQxYS5qcGVnP29k/bkhlaWdodD01NzYm/b2RuV2lkdGg9NTc2/Jm9kbkJnPUZGRkZG/Rg' },
        { id: 2, name: 'Tic Tac', price: 1.20, stock: 5, pathImage: 'https://imgs.search.brave.com/i64CAOUi23fXmXZ9se7QFYz99caDQu2LJ7u0J6FukzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgxMjczMi1NTEE4/MDQzMDY5ODA2Ml8x/MTIwMjQtVi53ZWJw' },
        { id: 3, name: 'Hershey’s', price: 1.50, stock: 5, pathImage: 'https://imgs.search.brave.com/8W1yCm1rlgX9rmGHm746MJHhKm269DoFNKy49EGIyWE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FuZHl3YXJlaG91/c2UuY29tL2Nkbi9z/aG9wL2ZpbGVzL2hl/cnNoZXktcy1taWxr/LWNob2NvbGF0ZS00/LTQtb3VuY2UtanVt/Ym8tY2FuZHktYmFy/cy0xMi1waWVjZS1i/b3gtY2FuZHktd2Fy/ZWhvdXNlLTIuanBn/P3Y9MTczNjU1OTEz/NCZ3aWR0aD02MDA' },
        { id: 4, name: 'Pacari', price: 4.30, stock: 5, pathImage: 'https://imgs.search.brave.com/KysMXPTl9eEykBoyQJAeURsJstIPrLpwL9g8ejS2ChA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmFm/dGNob2NvbGF0ZS5z/dG9yZS9jaG9jb2xh/ZGUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMTAvcGFjYXJp/LWNob2NvbGFkZS1i/bGF1d2UtYmVzLWJp/b2xvZ2lzY2gtcmVl/cC5qcGc' },
        { id: 5, name: 'Hot Tamales', price: 2.00, stock: 5, pathImage: 'https://imgs.search.brave.com/alcWKIF_2I9wh5wMAgMZtDrF6WpJ9e90PFyi9fl_RJ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFKa2hOSDRXckwu/anBn' },
    ];

    // Hook useStete para manejar la lista de productos
    const [productList, setProductList] = useState<Product[]>(products);

    // Hook useState para gestionar los productos del carrito
    const [cart, setCart] = useState<Cart[]>([]);

    // Hook useState para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    // Función para actualizar el stock y el carrito
    const updateStock = (id: number, quantity: number): void => {
        setProductList(prevList =>
            prevList.map(product =>
                product.id === id
                    ? { ...product, stock: product.stock - quantity }
                    : product
            )
        );

        // Luego actualizamos el carrito
        addProduct(id, quantity);
    };

    // Función para añadir productos sin duplicar
    const addProduct = (id: number, quantity: number): void => {
        const product = productList.find(product => product.id === id);
        if (!product) return;

        setCart(prevCart => {
            const existingIndex = prevCart.findIndex(item => item.id === id);

            if (existingIndex !== -1) {
                // Si ya existe, actualizar cantidad y total
                const updatedCart = [...prevCart];
                updatedCart[existingIndex] = {
                    ...updatedCart[existingIndex],
                    quantity: updatedCart[existingIndex].quantity + quantity,
                    total: (updatedCart[existingIndex].quantity + quantity) * product.price
                };
                return updatedCart;
            }

            // Si no existe, agregarlo
            return [
                ...prevCart,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity,
                    total: product.price * quantity
                }
            ];
        });
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <View style={styles.containerHeader}>
                <TitleComponent title='Productos' />
                <View style={styles.containerIcon}>
                    <Text style={styles.texIconCart}>{cart.length}</Text>
                    <Icon name='shopping-cart'
                        size={27}
                        color={SECUNDARY_COLOR}
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <BodyComponents>
                <FlatList
                    data={productList}
                    renderItem={({ item }) => <CardProducts item={item} updateStock={updateStock} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponents>
            <ModalCart
                visible={showModal}
                setShowModal={() => setShowModal(!showModal)}
                cart={cart} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerIcon: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 25
    },

    texIconCart: {
        backgroundColor: SECUNDARY_COLOR,
        paddingHorizontal: 5,
        borderRadius: 25,
        fontWeight: 'bold',
        fontSize: 12
    },

})
