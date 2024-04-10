import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View, useAnimatedValue } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Productcard = ({ item, handleLiked }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('PRODUCT_DETAILS', { item });
        }} style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.Price}>{item.price}</Text>
            </View>
            <View style={styles.likeContainer}>
                <TouchableOpacity
                    onPress={() => {
                        handleLiked(item);
                    }}
                >
                    {item?.isLiked ? (

                        <AntDesign name={'heart'} size={20} color={'#E55B5B'} />
                    ) : (
                        <AntDesign name={'hearto'} size={20} color={'#E55B5B'} />

                    )}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default Productcard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        position: 'relative'
    },
    coverImage: {
        width: '90%',
        height: 256,
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        color: '#444444',
        fontWeight: '600',
    },
    Price: {
        fontSize: 18,
        color: '#9C9C9C',
        fontWeight: "600"
    },
    content: {
        paddingLeft: 15
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: 20,
        right: 15
    }
})