import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CardContext } from "../context/CartContext";



const imageUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png";

const sizes = ["S", "M", "L", "XL"];
const colorsArray = [
    "#91A1B0",
    "#B11D1D",
    "#1F44A3",
    "#9F632A",
    "#1D752B",
    "#000000",
];

const ProductDetailScreen = () => {
    const navigation = useNavigation()
    const { addToCart } = useContext(CardContext);
    const route = useRoute(); // Assuming you have imported and properly set up 'useRoute' from react-navigation
    const item = route.params.item;
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const handleAddToCart = (item) => {
        item.size = selectedSize;
        item.color = selectedColor;
        addToCart(item);
        navigation.navigate("CART");
    };

    return (
        <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <Text style={[styles.title, styles.sizeText]}>Size</Text>
            <View style={styles.sizeContainer}>
                {sizes.map((size, index) => (
                    <TouchableOpacity
                        key={index}
                        // key={size}
                        style={[
                            styles.sizeValueContainer,
                            selectedSize === size && { backgroundColor: "#E55B5B" },
                        ]}
                        onPress={() => setSelectedSize(size)}
                    >
                        <Text style={styles.sizeValue}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={[styles.title, styles.colorText]}>Colors</Text>
            <View style={styles.colorContainer}>
                {colorsArray.map((color, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.circleBorder,
                            selectedColor === color && { borderColor: color, borderWidth: 2 },
                        ]}
                        onPress={() => setSelectedColor(color)}
                    >
                        <View style={[styles.circle, { backgroundColor: color }]} />
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {
                handleAddToCart(item);
            }
            }>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 15,
    },
    coverImage: {
        width: "100%",
        height: 420,
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 15,
    },
    title: {
        fontSize: 20,
        color: "#444444",
        fontWeight: "500",
    },
    price: {
        color: "#4d4c4c",
    },
    sizeText: {
        marginHorizontal: 20,
        color: "#000",
        fontWeight: "500",
    },
    sizeContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    sizeValue: {
        fontSize: 18,
        fontWeight: "600",
    },
    colorText: {
        marginHorizontal: 20,
        color: "#000",
        fontWeight: "500",
        margin: 5,
    },
    colorContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    circle: {
        height: 36,
        width: 36,
        borderRadius: 20,
    },
    circleBorder: {
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: "#E96E6E",
        padding: 10,
        borderRadius: 20,
        margin: 10,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
    },
});
