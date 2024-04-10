import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const imageurl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"


const CartCard = ({item,deleteItemFromCart}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.cardContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.circleSizeContainer}>
                    <View style={[styles.circle,{backgroundColor: item.color}]} />
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizeText}>{item.size}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{ deleteItemFromCart(item);}}>
                <FontAwesome6 name={"trash"} color={"#F68CB5"} size={22} />
            </TouchableOpacity>

        </View>
    )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    coverImage: {
        width: "25%",
        height: 125,
        borderRadius: 15
    },
    cardContainer: {
        flex: 1,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#444444'
    },
    price: {
        color: '#797979',
        marginVertical: 10,
        fontSize: 18,
    },
    circle: {
        height: 32,
        width: 32,
        borderRadius: 16,
        // backgroundColor: "#7094C1"
    },
    circleSizeContainer: {
        flexDirection: 'row'
    },
    sizeCircle: {
        backgroundColor: '#fff',
        height: 32,
        width: 32,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    sizeText: {
        fontSize: 18,
        fontWeight: '500'
    }
})