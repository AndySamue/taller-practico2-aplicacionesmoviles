import React from 'react'
import { FlatList, StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BACKGROUNDCOLOR } from '../../commons/constants'
import { BodyComponents } from '../../components/BodyComponents'
import { CardProduct } from './components/CardProduct'

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {

    const products = [
        { id: 1, name: 'Jolly Rancher', price: 3.30, stock: 5, pathImage: 'https://imgs.search.brave.com/8AgZGHpZ0wMlxpRXkj3b9Qvpj5W0SwefQFFnHNvkuOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vSm9s/bHktUmFuY2hlci0y/LWluLTEtRnJ1aXQt/Rmxhdm9yZWQtSGFy/ZC1DYW5keS1CYWct/Ni01LW96XzgwZjNk/MWI4LTM2OTMtNDc2/NS1iODFiLWE2OTFi/YWQwNDVhYi5jZmI2/YWUxYzJkZjQ2NzI4/YzY4ZmIxY2Y4NGFl/YzQxYS5qcGVnP29k/bkhlaWdodD01NzYm/b2RuV2lkdGg9NTc2/Jm9kbkJnPUZGRkZG/Rg' },
        { id: 2, name: 'Tic Tac', price: 1.20, stock: 5, pathImage: 'https://imgs.search.brave.com/Xv3wRFhStoaSRSTG4a7e_xmbVfDgyg_oe_iYmfV7uZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jNy5h/bGFteS5jb20vY29t/cC8yQUg5NEYyL3Rp/Yy10YWMtb3Jhbmdl/LWNhbmRpZXMtdGlj/LXRhYy1pcy1hLWJy/YW5kLW9mLWZlcnJl/cm8tMkFIOTRGMi5q/cGc' },
        { id: 3, name: 'Hershey’s', price: 1.50, stock: 5, pathImage: 'https://imgs.search.brave.com/8W1yCm1rlgX9rmGHm746MJHhKm269DoFNKy49EGIyWE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FuZHl3YXJlaG91/c2UuY29tL2Nkbi9z/aG9wL2ZpbGVzL2hl/cnNoZXktcy1taWxr/LWNob2NvbGF0ZS00/LTQtb3VuY2UtanVt/Ym8tY2FuZHktYmFy/cy0xMi1waWVjZS1i/b3gtY2FuZHktd2Fy/ZWhvdXNlLTIuanBn/P3Y9MTczNjU1OTEz/NCZ3aWR0aD02MDA' },
        { id: 4, name: 'Pacari', price: 4.30, stock: 5, pathImage: 'https://imgs.search.brave.com/KysMXPTl9eEykBoyQJAeURsJstIPrLpwL9g8ejS2ChA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmFm/dGNob2NvbGF0ZS5z/dG9yZS9jaG9jb2xh/ZGUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMTAvcGFjYXJp/LWNob2NvbGFkZS1i/bGF1d2UtYmVzLWJp/b2xvZ2lzY2gtcmVl/cC5qcGc' },
        { id: 5, name: 'Hot Tamales', price: 2.00, stock: 5, pathImage: 'https://imgs.search.brave.com/alcWKIF_2I9wh5wMAgMZtDrF6WpJ9e90PFyi9fl_RJ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFKa2hOSDRXckwu/anBn' },
    ];


    return (
        <View>
            <StatusBar backgroundColor={BACKGROUNDCOLOR} />
            <TitleComponent title='PRODUCTOS' />
            <BodyComponents>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProduct item={item} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponents>
        </View>
    )
}
