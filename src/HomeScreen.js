import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Header from './components/Header';
import Fontisto from "react-native-vector-icons/Fontisto";
import Category from './components/Category';
import Productcard from './components/Productcard';
import data from "./data/data.json"


const Categories = ['Trending Now', 'All', 'New', 'Mens', 'Womems']

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState('Mens');
  const [isLiked, setIsLiked] = useState(false)
  const handleLiked = (item) => {
    const newProducts = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: true
        };
      }
      return prod;
    });
    setProducts(newProducts);
  }
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.Container}>
      <Header />

      {/* product list */}
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={Productcard}
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>
            {/* input container */}
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                {/* Categories section */}
                <FlatList name={"search"} size={26} color=
                  {"#C0C0C0"} />
              </View>
              <TextInput style={styles.textInput}
                placeholder='Search' />
            </View>
            <FlatList
              data={Categories}
              renderItem={({ item }) => <Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={products}
        renderItem={({ item, index }) => (<Productcard item={item} handleLiked={handleLiked} />)} contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
      />
      {/* <View style={{flexDirection:'row'}}>
        <Productcard/>
        <Productcard/>
      </View> */}

    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  Container: {
    padding: 20
  },
  matchText: {
    fontSize: 28,
    color: '#000',
    marginTop: 25
  },
  inputContainer: {
    backgroundColor: '#fff',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,

  }
})